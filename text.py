main_input = input('create account (ca) // deposit (dep)  ')

fullname = '' # full name of client
email = '' # email client
password = '' # passwords of client
balance = '' # client balance
id = '' # personal id 
arr = []
back = ''
def banck_porject (a):
    test = []
    print('======================================')
    print("conditons dont enter name with or your account will be reset")
    print('======================================')

    if main_input == 'ca':
        print('======================================')
        print('enter youre current name ')
        print('======================================')
        
        name = input('enter name : ')
        print('======================================')
        print('enter youre last_name name')
        last_name = input('enter last name: ')
        fullname = name  + last_name
        print('======================================')
        print('enter correct passwrods')
        print('======================================')
        email =  input('enter email: ')
        #  check func
        if fullname == '':
            print('======================================')
            print('try again')
            print('======================================')

    
            banck_porject(test)
        if email in "@" :
            email = email
        else:
            while '@' not in email:
                if 'b' in email:
                    
                    banck_porject(test)
                else:
                    email = input('try again, try with "@" or back with (b): ').lower()
        print('======================================')
        print('write correct password')
        print('======================================')
        password = input('enter passwod: ')
        print('write correct balance with numbers or banck will reload')
        
        balance = int(input('enter balance: '))
        print('======================================')
        print('enter correct id dont use letters and id must contain 6 or more characters')
        print('======================================')

        id = input('enter perosnal id: ')

        # other functions like id, blance passwords

        while password == '' or len(password) < 6:
            print('======================================')

            print('wrong passwords use 6 or more length password')
            print('======================================')
    
            password = input('update password or try again with (b): ')
            print('======================================')

            if password == 'b':
                print('======================================')
                print('sorry try again :(')
                print('======================================')
                banck_porject()
            break
        # id
        while id == '' or len(id) < 8:
            print('======================================')
            print('wrong id use 6 or more length id')
            print('======================================')

            id = input('update id or try again with (b): ')
            print('======================================')

            if id == 'b':
                print('======================================')
                print('sorry try again :(')
                print('======================================')

                banck_porject()
            break
        arr.append({'id': id,
                    'email': email,
                    'password': password
                    })
        
        # end of create account
    # deposit
    print(arr)
    # banck_porject(arr)
    print('what type of funciton do you what in youre account')
    
    def what_whant():
        inp = input('enter what do you whant If you wirte \nid you will get youre id If you wirte \nemail you will get youre email If you wirte \npassword you will get youre password  ')
        if inp == 'id':
            print('youre id')
            print(arr[0].get(inp))
            what_whant()
        if inp == 'password':
            print('youre password')
            print(arr[0].get(inp))
            what_whant()
        if inp == 'balacne':
            print('youre balace')
            print(arr[0].get(inp))
            what_whant()
    what_whant()
banck_porject(arr)

div = {
    'sd': 'asd'
}
print(div.values())