# Script working to download fonts on the web and then upload them directly to the ./styles directory within the overall
# project directory 


# Simply run this bash script with the name of the font file you downloaded. 
# THIS WILL ONLY RUN IF YOU DO NOT INCLUDE THE '.zip' EXTENSION AT THE END 
# ALSO YOU MUST MAKE SURE YOU ARE STORING THE FONT FILE WITHIN THE DOWNLOADS FOLDER. 

# EDIT THIS SCRIPT AT WILL TO CORRESPOND WITH YOUR PREFERENCES

tar -xvf ../../../Downloads/$1.zip && mv ../../../Downloads/$1 .