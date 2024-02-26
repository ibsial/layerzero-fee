import {writeFileSync} from 'fs'

function main() {
    writeFileSync('./addresses.txt', "")
    writeFileSync('./proxies.txt', "login:pass@ip:port")
}
main()