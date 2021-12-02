# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

podcasts = Podcast.create([{ name: 'Roe Jogan Experience', host: "Roe Jogan", description: 'a podcast about things and stuff', genre: 'talk', thumbnail:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage-cdn.hypb.st%2Fhttps%3A%252F%252Fhypebeast.com%252Fimage%252F2020%252F05%252F100m-the-joe-rogan-experience-deal-add-1-7b-spotify-market-cap-1.jpg%3Fq%3D75%26w%3D800%26cbr%3D1%26fit%3Dmax&f=1&nofb=1'}])
podcasts = Podcast.create([{ name: 'The programmer mindset', host: "Johnathan Simmons", description: 'a podcast discussing all things code.', genre: 'technology', thumbnail:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshotstash.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fshot-stash-colorful-programming-code-1100x733.jpg&f=1&nofb=1'}])
podcasts = Podcast.create([{ name: 'test', host: "Bobby", description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah', genre: 'talk', thumbnail:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F349%2Fthumb-1920-349358.jpg&f=1&nofb=1'}])
podcasts = Podcast.create([{ name: 'test', host: "Bobby", description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah', genre: 'talk', thumbnail:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F349%2Fthumb-1920-349358.jpg&f=1&nofb=1'}])

puts "done seeding 🌱"