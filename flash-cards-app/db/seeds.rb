# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "Seeding!"

lists = List.create([
    {
        name: "List1",
        description: "This is List1"
    },
    {
        name: "List2",
        description: "This is List2"
    },
    {
        name: "My List",
        description: "This is My List"
    },
    {
        name: "LIST1",
        description: "LIST!"
    },
    {
        name: "Nice List",
        description: "Nice!"
    }
])

cards = Card.create([
    {
        front: "Yes or no?",
        back: "No!",
        note: "Got it right!",
        list: lists.first
    },
    {
        front: "Yes or no?",
        back: "No!",
        note: "Got it right!",
        list: lists.first
    },
    {
        front: "Yes or no?",
        back: "No!",
        note: "Got it right!",
        list: lists.first
    }
])

tags = Tag.create([
    {
        name: "JS",
        icon: "JS ICON",
        card: cards.first
    },
    {
        name: "General",
        icon: "GENERAL ICON",
        card: cards.first
    },
    {
        name: "JS",
        icon: "JS ICON",
        card: cards.second
    },
    {
        name: "General",
        icon: "GENERAL ICON",
        card: cards.second
    },
    {
        name: "JS",
        icon: "JS ICON",
        card: cards.last
    },
    {
        name: "General",
        icon: "GENERAL ICON",
        card: cards.last
    }
])

puts "Seeding Complete!"
