describe("Pomodoro", function() {
    it("new できること", function() {
        expect(new Pomodoro({remainSeconds: 25 * 60 * 1000})).to.be.a(Pomodoro);
    });

    it("初期化時にremainSecondsを渡せること", function() {
        var target = new Pomodoro({remainSeconds: 25 * 60 * 1000});
        expect(target.get("remainSeconds")).to.be(25 * 60 * 1000);
    });

    it("初期化時にstartTimeが設定されていないこと", function() {
        var target = new Pomodoro({remainSeconds: 25 * 60 * 1000});
        expect(target.get("startTime")).to.be(undefined);
    });
});
