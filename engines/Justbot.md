# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3295<sub>(+230) | 3453<sub>(+178) | 3521<sub>(+192) |  |
| 0.3.0 | 2026-07-19 | 3065<sub>(+485) | 3275<sub>(+379) | 3329<sub>(+363) |  |
| 0.2.0 | 2026-06-24 | 2580<sub>(+555) | 2896<sub>(+578) | 2966<sub>(+551) |  |
| 0.1.0 | 2026-06-09 | 2025 | 2318 | 2415 |  |
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

Generated: 2026-09-24 04:39:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "" [2025, 2580, 3065, 3295]
  line "STC (8.0+0.08s)" [2025, 2580, 3065, 3295]
  line "LTC (60.0+0.60s)" [2318, 2896, 3275, 3453]
  line "" [2415, 2966, 3329, 3521]
  line "VLTC (2m24s+1.12s)" [2415, 2966, 3329, 3521]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 81 | 36 | 56% | 3478 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3453 | 66 | 56 | 51% | 3443 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3295 | 59 | 76 | 47% | 3313 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3329 | 26 | 376 | 53% | 3308 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3275 | 27 | 352 | 50% | 3272 | 68% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3065 | 27 | 384 | 51% | 3056 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2966 | 37 | 212 | 50% | 2955 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2896 | 32 | 296 | 47% | 2915 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2580 | 36 | 252 | 46% | 2619 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2415 | 36 | 278 | 49% | 2435 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2318 | 35 | 284 | 49% | 2326 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2025 | 37 | 266 | 48% | 2040 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |