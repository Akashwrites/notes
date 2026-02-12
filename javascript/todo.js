let l1 = [];
let choice1 = 0;

while (choice1 != '4') {

    choice1 = prompt("Choose:\n1. View\n2. Add\n3. Delete\n4. Quit");

    if (choice1 == '1') {
        console.log("List items:");
        for (let i = 0; i < l1.length; i++) {
            console.log(l1[i]);
        }
    }

    else if (choice1 == '2') {
        let text = prompt("Enter the text you need to add:");
        console.log("Adding...");
        l1.push(text);
    }

    else if (choice1 == '3') {
        console.log("Deleting last item...");
        l1.pop();
    }

    else if (choice1 == '4') {
        console.log("Quitting...");
        break;
    }

    else {
        console.log("Invalid choice!");
    }
}
