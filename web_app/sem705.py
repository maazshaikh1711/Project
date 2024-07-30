# -*- coding: utf-8 -*-
"""
Created on Sat Jan  2 02:36:58 2021

@author: hp
"""



import streamlit as st
import pandas as pd
import numpy as np
import pymongo
import folium
import branca
from folium import  Marker
import folium.plugins as plugins
from folium.plugins import  MarkerCluster
from streamlit_folium import folium_static
import sqlite3
import os

#IMP_NOTE:
#Please modify this accordingly before running (DEPLOYMENT OR DEVELOPMENT)
environment = "DEVELOPMENT"

conn=sqlite3.connect('data.db')
c=conn.cursor()

def create_usertable():
    c.execute('CREATE TABLE IF NOT EXISTS usertable(username TEXT,password TEXT)')

def add_userdata(username,password):
    c.execute('INSERT INTO usertable(username,password) VALUES(?,?)',(username,password))
    conn.commit()

def login_user(username,password):
    c.execute('SELECT * FROM usertable WHERE username=? AND password=? ',(username,password))
    data=c.fetchall()
    return data

def view_all_users():
    c.execute('SELECT * FROM usertable')
    data=c.fetchall()
    return data


def login_tab():
    
        st.subheader("Login to Cotinue")

        username1=st.sidebar.text_input("User Name")
        password1=st.sidebar.text_input("Password",type="password")

        st.sidebar.text("Press Enter to Login")
        

        create_usertable()
        result=login_user(username1,password1)

       

        if True:

            if result:
                
                #for i in result:
                    #st.write(i)
                    #st.write(type(i))
                   
                st.success(f"Logged in as {username1}")

                emp_arr=['']
                infra_arr=['Hospital','Towers', 'Wifi']
                infra_list=np.append(emp_arr,infra_arr)
                
                infra_selected = st.selectbox('Select one option:',infra_list, format_func=lambda u: 'Select one option' if u == '' else u,key="Infra list")
                
                if infra_selected:
                    st.success(f"You selected {infra_selected}")

                    
                    if infra_selected=='Wifi':
                        df1=pd.read_csv("https://raw.githubusercontent.com/Rohan-Rokade/Mapping-_Telecom-/main/wifi_gen.csv")
                        st.table(df1)
                        
                        emp_arr=['']
                        wifi_arr=['Metadata Attached','Heat Map']
                        wifi_list=np.append(emp_arr,wifi_arr)
                        
                        wifi_inner_selected = st.selectbox('select an option',wifi_list, format_func=lambda u: 'Select an option' if u == '' else u,key="wifi inner  list") 
                        if  wifi_inner_selected:
                                st.success("You selected an option")
                                if wifi_inner_selected =='Metadata Attached':
                                    
                                    
                        
                                    def fancy_html(row):
                                        i = row
                                        mi="MetaData Information"
                                        Network_Service_Provider = df1['nsp'].iloc[i]                             
                                        Number_of_Connected_Users = df1['ncu'].iloc[i]                           
                                    
                                        
                                        left_col_colour = "#2A799C"
                                        right_col_colour = "#C5DCE7"
                                        
                                        html = """<!DOCTYPE html>
                                    <html>
                                    
                                    <head>
                                    <h4 style="margin-bottom:0"; width="300px">{}</h4>""".format(mi)+"""
                                    
                                    </head>
                                    
                                    <table style="height: 126px; width: 300px;">
                                    <tbody>
                                    <tr>
                                    <td style="background-color: """+ left_col_colour +""";"><span style="color: #ffffff;">Network Service Provider</span></td>
                                    <td style="width: 100px;background-color: """+ right_col_colour +""";">{}</td>""".format(Network_Service_Provider) + """
                                    </tr>
                                    <tr>
                                    <td style="background-color: """+ left_col_colour +""";"><span style="color: #ffffff;">Number of Connected_Users</span></td>
                                    <td style="width: 100px;background-color: """+ right_col_colour +""";">{}</td>""".format(Number_of_Connected_Users) + """
                                    </tr>
                                    
                                    
                                    
                                    </tbody>
                                    </table>
                                    </html>
                                    """
                                        return html
                                    
                                    location = df1['lat'].mean(), df1['lon'].mean()
                                    m101 = folium.Map(location=location,zoom_start=5)
                                    
                                    for i in range(0,len(df1)):
                                        
                                        ncu9 = df1['ncu'].iloc[i]
                                        if ncu9 >= 1 and ncu9 <=2:
                                            colors = 'green'
                                        elif ncu9 > 2 and ncu9<=4:
                                            colors = 'purple'
                                        elif ncu9 >4:
                                            colors = 'red'
                                        
                                        html = fancy_html(i)
                                        iframe = branca.element.IFrame(html=html,width=500,height=180)
                                        popup = folium.Popup(iframe,parse_html=True)
                                        
                                        mc = MarkerCluster()
                                        
                                        mc.add_child(Marker([df1['lat'].iloc[i],df1['lon'].iloc[i]],
                                                      popup=popup,icon=folium.Icon(color=colors,icon='info-sign'))).add_to(m101)
                                    m101.add_child(mc)
                                    st.subheader(" **Range for legends**")
                                    st.write("Green : 1 - 2")
                                    st.write("Purple : 3 - 4")
                                    st.write("Red : 5 - 6")
                                        
                                    
                                    folium_static(m101)
                        
                                else:
                                    
                                    m103 = folium.Map(location=[np.average(df1['lat']),np.average(df1['lon'])], tiles='cartodbpositron', zoom_start=4)
                                    
                                    
                                    data_heat = df1[['lat','lon','ncu']].values.tolist()
                                    plugins.HeatMap(data_heat).add_to(m103)
                                    folium_static(m103)
                        else:
                            st.warning("No option selected")
                        
                        
                    elif infra_selected=='Hospital':
                        
                        ##################  1st section

                        st.subheader("ALL HOSPITALS")
                        df1=pd.read_csv("https://raw.githubusercontent.com/Rohan-Rokade/Mapping-_Telecom-/main/hos_gen.csv")
                        df1['contact']=df1['contact'].astype(str)
                        st.table(df1)
                        
                        m99= folium.Map(location=[np.average(df1['lat']),np.average(df1['lon'])], tiles='cartodbpositron', zoom_start=4)
                        mc = MarkerCluster()
                        
                        
                        for i in range(0,len(df1)):
                            
                                    def fancy_html(row):
                                                    i = row
                                                    mi="MetaData Information"
                                                    hostname = df1['host'].iloc[i]                             
                                                    contact_number = df1['contact'].iloc[i] 
                                                    opening=df1['open'].iloc[i]
                                                    closing=df1['closed'].iloc[i]
                                                
                                                    
                                                    left_col_colour = "#2A799C"
                                                    right_col_colour = "#C5DCE7"
                                                    
                                                    html = """<!DOCTYPE html>
                                                <html>
                                                
                                                <head>
                                                <h4 style="margin-bottom:0"; width="300px">{}</h4>""".format(mi)+"""
                                                
                                                </head>
                                                
                                                <table style="height: 126px; width: 300px; margin-bottom: 20px;">
                                                <tbody>
                                                    <tr>
                                                    <td style="background-color: """+ left_col_colour +""";"><span style="color: #ffffff;"> Hospital Name</span></td>
                                                    <td style="width: 100px;background-color: """+ right_col_colour +""";">{}</td>""".format(hostname) + """
                                                    </tr>
                                                    <tr>
                                                    <td style="background-color: """+ left_col_colour +""";"><span style="color: #ffffff;">Contact Number</span></td>
                                                    <td style="width: 100px;background-color: """+ right_col_colour +""";">{}</td>""".format(contact_number) + """
                                                    </tr>
                                                    <tr>
                                                    <td style="background-color: """+ left_col_colour +""";"><span style="color: #ffffff;">Opening Time</span></td>
                                                    <td style="width: 100px;background-color: """+ right_col_colour +""";">{}</td>""".format(opening) + """
                                                    </tr>
                                                    <tr>
                                                    <td style="background-color: """+ left_col_colour +""";"><span style="color: #ffffff;">Closing Time</span></td>
                                                    <td style="width: 100px;background-color: """+ right_col_colour +""";">{}</td>""".format(closing) + """
                                                    </tr>
                                                
                                                </tbody>
                                                </table>
                                                </html>
                                                """
                                                    return html
                                        
                                    html = fancy_html(i)
                                    iframe = branca.element.IFrame(html=html,width=500,height=180)
                                    popup = folium.Popup(iframe,parse_html=True)
                                    
            
                                    mc.add_child(Marker(location=[df1['lat'].iloc[i],df1['lon'].iloc[i]],popup=popup,icon=folium.Icon(icon='info-sign'))).add_to(m99)
                        m99.add_child(mc)
                        folium_static(m99)


                        ##################  2nd section
                        
                        st.markdown("<br>" * 5, unsafe_allow_html=True)  # Adds vertical space
                        st.subheader("SEARCH BY NAME")
                        pt_input=st.text_input("Enter the name or substring of Hospital name you want to find","")
                        
                        if(pt_input!= ""):
                            data9=df1[df1.host.str.contains(pt_input.lower(), case=False, na=False)]
                            st.write(data9)
                            
                            
                            
                            m95= folium.Map(location=[np.average(df1['lat']),np.average(df1['lon'])], tiles='cartodbpositron', zoom_start=4)
                            mc = MarkerCluster()
                            for idx, row in data9.iterrows():
                                 mc.add_child(Marker(location=[row['lat'], row['lon']],
                            popup=popup,icon=folium.Icon(icon='info-sign')
                                    ))
                            m95.add_child(mc) 
                            folium_static(m95)


                        ##################  3rd section

                        st.markdown("<br>" * 5, unsafe_allow_html=True)  # Adds vertical space
                        st.subheader("CHECK OPEN HOSPITALS")

                        #time fix 
                        hr_input=st.slider('Slide Hours', min_value=0, max_value=24)
                        
                        df1['op_hr']=df1['open'].str[:2]
                        df1['op_hr']=df1['op_hr'].astype(int)

                        df1['cl_hr']=df1['closed'].str[:2]
                        df1['cl_hr']=df1['cl_hr'].astype(int)

                        # Convert input to integer
                        hr_input = int(hr_input)

                        # Filter DataFrame based on input hour
                        filtered_df = df1[(df1['op_hr'] <= hr_input) & (df1['cl_hr'] >= hr_input)]

                        # Display filtered DataFrame
                        st.write(filtered_df[['lat', 'lon', 'host', 'open', 'closed', 'contact']])

                        # data8=df1[(df1.op_hr==hr_input)]
                        # st.write(data8)
                        
                        m96= folium.Map(location=[np.average(df1['lat']),np.average(df1['lon'])], tiles='cartodbpositron', zoom_start=4)
                        mc = MarkerCluster()
                        for idx, row in filtered_df.iterrows():
                             mc.add_child(Marker(location=[row['lat'], row['lon']],
                        popup=("Hospital Name: {xyz1}<br>""Opening time of Hospital: {open1}<br>" "Closing time of Hospital: {close1}<br>" "Contact Number :{contact1}<br>")
                        .format(xyz1=row.host,open1=row.open,close1=row.closed,contact1=row.contact)
                                ,icon=folium.Icon(icon='info-sign')
                                ))
                        m96.add_child(mc) 
                        folium_static(m96)
                                                
                       
                        
                    elif  infra_selected=='Towers':
                        
                        def get_mongo_uri():
                            # Check if running in Streamlit Cloud environment
                            if environment=="DEPLOYMENT":
                                return st.secrets["MONGO_URI"]
                            elif environment=="DEVELOPMENT":
                                # Fallback to environment variable for local development
                                return os.getenv("MONGO_URI")

                        # Get the MongoDB URI
                        mongo_uri = get_mongo_uri()
                        
                        @st.cache_resource
                        def load_data():
                                client = pymongo.MongoClient(mongo_uri)
                        
                                db = client["natours"]
                                towers= db["towers"].find().limit(500)
                        
                                data = [userRecord for userRecord in towers ] 
                                df1= pd.DataFrame(data)
                                df1.reset_index(drop=True, inplace=True)
                                df1.drop(['_id'], axis=1,inplace=True)
                                return df1
                        
                        data2=load_data()
                        st.table(data2.head())
                        
                        m_3 = folium.Map(location=[np.average(data2['lat']),np.average(data2['lon'])], tiles='cartodbpositron', zoom_start=4)
                        # Add points to the map
                        mc = MarkerCluster()
            
                        for idx, row in data2.iterrows():
                             mc.add_child(Marker(location=[row['lat'], row['lon']],
                                                 popup=("Range: {range1}<br>"
                         "Radio Type: {radio1}<br>").format(range1=row.range,radio1=row.radio),icon=folium.Icon(icon='info-sign')))
                        m_3.add_child(mc)
                        
                        folium_static(m_3)
                        
                        m_4 = folium.Map(location=[np.average(data2['lat']),np.average(data2['lon'])], tiles='cartodbpositron', zoom_start=4)


                        data_heat = data2[['lat','lon','samples']].values.tolist()
                        plugins.HeatMap(data_heat).add_to(m_4)
                        folium_static(m_4)
                else:
                    st.warning("No option selected")
                    
            else :
                st.warning("Incorrect username/Password")
        else:
            pass

def signup_tab():
    st.subheader("Create New Account")

    username1=st.sidebar.text_input("Username1")
    password1=st.sidebar.text_input("Password1",type="password")

    st.sidebar.text("Press Enter to Login")

    if True:
        
        if login_user(username1, password1):
            st.subheader("Please use any other username. Username with this name exists!!")

        else:        
            create_usertable()
            add_userdata(username1, password1)
            st.info("Go to login menu to login")

def logout_tab():
    st.subheader("You are Logged out")


def main():
    menu=["Home","login","sign up","logout"]
    choice=st.sidebar.selectbox("Menu",menu,index=0)

    if choice =="Home":
        st.title("Server Based Web GIS Application for Goverment Authorities")
        
    elif choice=="login":
        login_tab()
        
    elif choice == "sign up":
        signup_tab()

    elif choice=='logout':
        logout_tab()


            
if __name__== '__main__':
    main()
        

