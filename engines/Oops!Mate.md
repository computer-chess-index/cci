# Engine: Oops!Mate

Author: Swoyam Pokharel

Home: https://github.com/PS-Wizard/OopsMate

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1283<sub>(-126) | 1488<sub>(-79) | 1515<sub>(-98) |  |
| 0.0.4 | 2025-11-23 | 1409 | 1567 | 1613 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1204<sub>(-354) | 1416<sub>(+102) | 1494<sub>(+101) |  |
| 0.0.4 | 2025-11-23 | 1558 | 1314 | 1393 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1278<sub>(+137) | 1459<sub>(+93) | 1499<sub>(+83) |  |
| 0.0.4 | 2025-11-23 | 1141 | 1366 | 1416 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Oops!Mate+<version>&body=###%20Engine%20name%0AOops!Mate%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:40:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1200 --> 1700
  line "E1: STC (8.0+0.08s)" [1409, 1283]
  line "E1: LTC (60.0+0.60s)" [1567, 1488]
  line "E1: VLTC (2m24s+1.12s)" [1613, 1515]
  line "P1: STC (8.0+0.08s)" [1558, 1204]
  line "P1: LTC (60.0+0.60s)" [1314, 1416]
  line "P1: VLTC (2m24s+1.12s)" [1393, 1494]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1500
  line "T1: STC (8.0+0.08s)" [1141, 1278]
  line "T1: LTC (60.0+0.60s)" [1366, 1459]
  line "T1: VLTC (2m24s+1.12s)" [1416, 1499]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1499 | 27 | 468 | 54% | 1459 | 30% |
|  |  | P1 | 1494 | 42 | 180 | 50% | 1494 | 35% |
|  |  | E1 | 1515 | 34 | 300 | 48% | 1555 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1459 | 27 | 508 | 51% | 1445 | 28% |
|  |  | P1 | 1416 | 46 | 166 | 45% | 1519 | 31% |
|  |  | E1 | 1488 | 34 | 308 | 47% | 1561 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1278 | 26 | 576 | 56% | 1170 | 28% |
|  |  | P1 | 1204 | 39 | 202 | 50% | 1202 | 37% |
|  |  | E1 | 1283 | 30 | 374 | 51% | 1281 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1613 | 158 | 30 | 7% | 2321 | 13% |
|  |  | T1 | 1416 | 43 | 190 | 42% | 1561 | 34% |
|  |  | P1 | 1393 | 148 | 32 | 19% | 1881 | 6% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1567 | 217 | 28 | 2% | 2481 | 4% |
|  |  | T1 | 1366 | 41 | 200 | 45% | 1455 | 32% |
|  |  | P1 | 1314 | 148 | 32 | 9% | 1895 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1409 | 176 | 28 | 5% | 2242 | 11% |
|  |  | T1 | 1141 | 43 | 198 | 43% | 1239 | 26% |
|  |  | P1 | 1558 | 260 | 20 | 0% | 2433 | 0% |