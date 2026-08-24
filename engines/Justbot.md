# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3285<sub>(+235) | 3441<sub>(+167) | 3509<sub>(+188) |  |
| 0.3.0 | 2026-07-19 | 3050<sub>(+480) | 3274<sub>(+388) | 3321<sub>(+366) |  |
| 0.2.0 | 2026-06-24 | 2570<sub>(+552) | 2886<sub>(+575) | 2955<sub>(+549) |  |
| 0.1.0 | 2026-06-09 | 2018 | 2311 | 2406 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:25:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "STC (8.0+0.08s)" [2018, 2570, 3050, 3285]
  line "STC (8.0+0.08s)" [2018, 2570, 3050, 3285]
  line "LTC (60.0+0.60s)" [2311, 2886, 3274, 3441]
  line "VLTC (2m24s+1.12s)" [2406, 2955, 3321, 3509]
  line "VLTC (2m24s+1.12s)" [2406, 2955, 3321, 3509]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 81 | 36 | 56% | 3467 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3441 | 66 | 56 | 51% | 3430 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3285 | 59 | 76 | 47% | 3302 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3321 | 28 | 344 | 53% | 3295 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3274 | 29 | 304 | 52% | 3259 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3050 | 30 | 320 | 50% | 3044 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2955 | 37 | 212 | 50% | 2944 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2886 | 32 | 296 | 47% | 2905 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2570 | 36 | 252 | 46% | 2610 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2406 | 36 | 278 | 49% | 2427 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 35 | 284 | 49% | 2319 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2018 | 37 | 266 | 48% | 2032 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |