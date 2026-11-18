# Engine: Ariadne

Author: Liam Galvin

Home: https://github.com/liamg/ariadne

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2106<sub>(+220) | 2439<sub>(+206) | 2556<sub>(+291) |  |
| 0.4.0 | 2026-08-16 | 1886 | 2233 | 2265 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2086<sub>(+246) | 2392<sub>(+252) | 2518<sub>(+305) |  |
| 0.4.0 | 2026-08-16 | 1840 | 2140 | 2213 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-18 05:36:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1800 --> 2600
  line "E1: STC (8.0+0.08s)" [1886, 2106]
  line "E1: LTC (60.0+0.60s)" [2233, 2439]
  line "E1: VLTC (2m24s+1.12s)" [2265, 2556]
  line "P1: STC (8.0+0.08s)" [1840, 2086]
  line "P1: LTC (60.0+0.60s)" [2140, 2392]
  line "P1: VLTC (2m24s+1.12s)" [2213, 2518]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "T1: STC (8.0+0.08s)" [1963, 2203]
  line "T1: LTC (60.0+0.60s)" [2255, 2493]
  line "T1: VLTC (2m24s+1.12s)" [2341, 2607]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2607 | 35 | 264 | 51% | 2593 | 34% |
|  |  | P1 | 2518 | 34 | 302 | 46% | 2577 | 27% |
|  |  | E1 | 2556 | 27 | 468 | 46% | 2597 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2392 | 37 | 242 | 48% | 2411 | 33% |
|  |  | E1 | 2439 | 32 | 350 | 47% | 2481 | 27% |
|  |  | T1 | 2493 | 35 | 264 | 48% | 2515 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2086 | 37 | 256 | 49% | 2111 | 23% |
|  |  | E1 | 2106 | 28 | 440 | 48% | 2132 | 27% |
|  |  | T1 | 2203 | 34 | 308 | 46% | 2237 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2213 | 71 | 80 | 36% | 2330 | 26% |
|  |  | E1 | 2265 | 54 | 124 | 44% | 2306 | 24% |
|  |  | T1 | 2341 | 34 | 296 | 51% | 2333 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2140 | 69 | 100 | 55% | 2045 | 12% |
|  |  | E1 | 2233 | 62 | 106 | 56% | 2114 | 16% |
|  |  | T1 | 2255 | 35 | 280 | 50% | 2253 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1886 | 51 | 152 | 54% | 1851 | 19% |
|  |  | T1 | 1963 | 37 | 256 | 50% | 1962 | 21% |
|  |  | P1 | 1840 | 69 | 92 | 43% | 1962 | 15% |