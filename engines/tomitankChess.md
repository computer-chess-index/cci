# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-03-31 | 2535<sub>(+93) | 2863<sub>(+90) | 2928<sub>(+67) |  |
| 5.3 | 2025-09-26 | 2442<sub>(+new) | 2773<sub>(+new) | 2861<sub>(+new) |  |
| 5.1 | 2024-03-24 |  |  |  |  |
| 5.0 | 2021-04-07 |  |  |  |  |
| 4.2 | 2020-09-23 |  |  |  |  |
| 4.0 | 2020-01-24 |  |  |  |  |
| 3.0 | 2019-02-23 |  |  |  |  |
| 2.1 | 2019-01-14 |  |  |  |  |
| 2.0 | 2018-11-26 |  |  |  |  |
| 1.5 | 2018-07-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:29:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2442, 2535]
  line "STC (8.0+0.08s)" [2442, 2535]
  line "LTC (60.0+0.60s)" [2773, 2863]
  line "VLTC (2m24s+1.12s)" [2861, 2928]
  line "VLTC (2m24s+1.12s)" [2861, 2928]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2928 | 28 | 380 | 49% | 2935 | 42% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2863 | 30 | 342 | 50% | 2866 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2535 | 28 | 420 | 48% | 2556 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 31 | 312 | 48% | 2877 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2773 | 32 | 310 | 52% | 2757 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2442 | 29 | 420 | 50% | 2439 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |