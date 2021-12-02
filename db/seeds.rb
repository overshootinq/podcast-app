# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

podcasts = Podcast.create([{ name: 'Roe Jogan Experience', host: "Roe Jogan", description: 'a podcast about things and stuff', genre: 'talk', thumbnail:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2Ffasq8pBGqHxP-B54Wda-sBB_pxzFsAAVrTqvhnhuzAk.jpg%3Fauto%3Dwebp%26s%3D8bfd51ff0fab9175277acc37cafa8fd81aeea029&f=1&nofb=1'}])
podcasts = Podcast.create([{ name: 'The programmer mindset', host: "Johnathan Simmons", description: 'a podcast discussing all things code.', genre: 'technology', thumbnail:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshotstash.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fshot-stash-colorful-programming-code-1100x733.jpg&f=1&nofb=1'}])
podcasts = Podcast.create([{ name: 'test', host: "Bobby", description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah', genre: 'talk', thumbnail:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F349%2Fthumb-1920-349358.jpg&f=1&nofb=1'}])
podcasts = Podcast.create([{ name: 'test', host: "Bobby", description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah', genre: 'talk', thumbnail:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F349%2Fthumb-1920-349358.jpg&f=1&nofb=1'}])

puts "done seeding 🌱"