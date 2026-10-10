# Engine: Ariadne

Author: Liam Galvin

Home: https://github.com/liamg/ariadne

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2006 | 2387 | 2472 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2202 | 2564 | 2691 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2203<sub>(+240) | 2493<sub>(+238) | 2607<sub>(+266) |  |
| 0.4.0 | 2026-08-16 | 1963 | 2255 | 2341 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ariadne+<version>&body=###%20Engine%20name%0AAriadne%0A%0A###%20Version%0A0.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:36:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "" [1963, 2203]
  line "STC (8.0+0.08s)" [1963, 2203]
  line "LTC (60.0+0.60s)" [2255, 2493]
  line "" [2341, 2607]
  line "VLTC (2m24s+1.12s)" [2341, 2607]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2691 | 41 | 210 | 45% | 2765 | 26% |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2472 | 34 | 290 | 44% | 2537 | 29% |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2607 | 35 | 264 | 51% | 2593 | 34% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2387 | 36 | 272 | 49% | 2387 | 27% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2493 | 35 | 264 | 48% | 2515 | 31% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2564 | 44 | 178 | 46% | 2601 | 31% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 2006 | 38 | 252 | 44% | 2075 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 2203 | 34 | 308 | 46% | 2237 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 2202 | 47 | 156 | 46% | 2242 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2341 | 34 | 296 | 51% | 2333 | 25% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2255 | 35 | 280 | 50% | 2253 | 23% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1963 | 37 | 256 | 50% | 1962 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |