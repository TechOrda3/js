
function goToPage(): void {
    history.go();
}

// class Page {
//     pageId: string;
//     route: string;
//
//     constructor(pageId: string, route: string) {
//         this.pageId = pageId;
//         this.route = route;
//     }
// }

class Page {
    constructor(public pageId: string, private route: string) {}
}

const page = new Page('1', 'home');
page.pageId = 'sda'

