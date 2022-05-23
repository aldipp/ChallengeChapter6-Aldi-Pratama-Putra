

class HomeController {
    
    static mainPage(req, res) {
        res.render('home')
    }

    // static games(req,res) {
    //     res.render('games')
    // }

    static about(req, res) {
        res.render('about')
    }

    static features(req, res) {
        res.render('features')
    }

    static systemRequirements(req, res) {
        res.render('systemRequirements')
    }

    static topScores(req, res) {
        res.render('topScores')
    }

    static subscribe(req, res) {
        res.render('subscribe')
    }
}

module.exports = HomeController