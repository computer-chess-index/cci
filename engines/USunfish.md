# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 942 | 1357 | 1430 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1122 | 1493 | 1662 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1088<sub>(+120) | 1470<sub>(+105) | 1540<sub>(+33) |  |
| 1.1 | 2026-05-15 | 968 | 1365 | 1507 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+USunfish+<version>&body=###%20Engine%20name%0AUSunfish%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-12 04:43:58

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 900 --> 1600
  line "T1: STC (8.0+0.08s)" [968, 1088]
  line "T1: LTC (60.0+0.60s)" [1365, 1470]
  line "T1: VLTC (2m24s+1.12s)" [1507, 1540]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1540 | 39 | 238 | 54% | 1507 | 21% |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1662 | 40 | 236 | 53% | 1628 | 14% |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1430 | 44 | 188 | 49% | 1462 | 21% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 1470 | 40 | 220 | 52% | 1449 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 1493 | 50 | 140 | 50% | 1488 | 19% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 1357 | 41 | 216 | 48% | 1372 | 19% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1088 | 36 | 282 | 49% | 1100 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1122 | 49 | 148 | 52% | 1103 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 942 | 38 | 238 | 46% | 979 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1507 | 32 | 360 | 51% | 1492 | 19% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 1365 | 33 | 344 | 51% | 1354 | 18% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 968 | 31 | 404 | 54% | 915 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |