# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2664<sub>(+115) | 3002<sub>(+132) | 3114<sub>(+102) |  |
| 1.00netbin | 2026-04-13 | 2549<sub>(+2151) | 2870<sub>(+2411) | 3012<sub>(+2542) |  |
| 1.00 | 2026-04-12 | 398 | 459 | 470 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gilipol+<version>&body=###%20Engine%20name%0AGilipol%0A%0A###%20Version%0A2.00" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:38:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3200
  line "" [398, 2549, 2664]
  line "STC (8.0+0.08s)" [398, 2549, 2664]
  line "LTC (60.0+0.60s)" [459, 2870, 3002]
  line "" [470, 3012, 3114]
  line "VLTC (2m24s+1.12s)" [470, 3012, 3114]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | 3114 | 24 | 482 | 52% | 3092 | 54% |
| 2.00 | LTC <sub>(60.0+0.60s)</sub> | 3002 | 26 | 428 | 52% | 2982 | 46% |
| 2.00 | STC <sub>(8.0+0.08s)</sub> | 2664 | 27 | 432 | 51% | 2657 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 28 | 426 | 57% | 2793 | 41% |
| 1.00netbin | LTC <sub>(60.0+0.60s)</sub> | 2870 | 25 | 546 | 59% | 2692 | 39% |
| 1.00netbin | STC <sub>(8.0+0.08s)</sub> | 2549 | 28 | 470 | 55% | 2387 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | 470 | 58 | 176 | 24% | 1058 | 21% |
| 1.00 | LTC <sub>(60.0+0.60s)</sub> | 459 | 59 | 148 | 27% | 950 | 30% |
| 1.00 | STC <sub>(8.0+0.08s)</sub> | 398 | 56 | 132 | 34% | 740 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |