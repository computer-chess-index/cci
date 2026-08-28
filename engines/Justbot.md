# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3287<sub>(+237) | 3444<sub>(+172) | 3510<sub>(+188) |  |
| 0.3.0 | 2026-07-19 | 3050<sub>(+477) | 3272<sub>(+384) | 3322<sub>(+364) |  |
| 0.2.0 | 2026-06-24 | 2573<sub>(+553) | 2888<sub>(+575) | 2958<sub>(+550) |  |
| 0.1.0 | 2026-06-09 | 2020 | 2313 | 2408 |  |
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

Generated: 2026-08-28 06:26:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "" [2020, 2573, 3050, 3287]
  line "STC (8.0+0.08s)" [2020, 2573, 3050, 3287]
  line "LTC (60.0+0.60s)" [2313, 2888, 3272, 3444]
  line "" [2408, 2958, 3322, 3510]
  line "VLTC (2m24s+1.12s)" [2408, 2958, 3322, 3510]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 81 | 36 | 56% | 3468 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3444 | 66 | 56 | 51% | 3433 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3287 | 59 | 76 | 47% | 3305 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3322 | 27 | 352 | 53% | 3297 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 28 | 316 | 51% | 3260 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3050 | 30 | 328 | 50% | 3047 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2958 | 37 | 212 | 50% | 2946 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2888 | 32 | 296 | 47% | 2907 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2573 | 36 | 252 | 46% | 2612 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2408 | 36 | 278 | 49% | 2429 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2313 | 35 | 284 | 49% | 2321 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2020 | 37 | 266 | 48% | 2034 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |