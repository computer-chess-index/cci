# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3291<sub>(+225) | 3449<sub>(+178) | 3517<sub>(+191) |  |
| 0.3.0 | 2026-07-19 | 3066<sub>(+489) | 3271<sub>(+378) | 3326<sub>(+364) |  |
| 0.2.0 | 2026-06-24 | 2577<sub>(+555) | 2893<sub>(+578) | 2962<sub>(+550) |  |
| 0.1.0 | 2026-06-09 | 2022 | 2315 | 2412 |  |
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

Generated: 2026-09-14 04:39:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "" [2022, 2577, 3066, 3291]
  line "STC (8.0+0.08s)" [2022, 2577, 3066, 3291]
  line "LTC (60.0+0.60s)" [2315, 2893, 3271, 3449]
  line "" [2412, 2962, 3326, 3517]
  line "VLTC (2m24s+1.12s)" [2412, 2962, 3326, 3517]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 81 | 36 | 56% | 3475 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 66 | 56 | 51% | 3438 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3291 | 59 | 76 | 47% | 3309 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3326 | 26 | 376 | 53% | 3305 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3271 | 27 | 348 | 50% | 3270 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3066 | 28 | 372 | 51% | 3052 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2962 | 37 | 212 | 50% | 2951 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2893 | 32 | 296 | 47% | 2912 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2577 | 36 | 252 | 46% | 2616 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2412 | 36 | 278 | 49% | 2433 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2315 | 35 | 284 | 49% | 2323 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2022 | 37 | 266 | 48% | 2037 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |