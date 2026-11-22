# Engine: Ariadne

Author: Liam Galvin

Home: https://github.com/liamg/ariadne

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2109<sub>(+223) | 2444<sub>(+210) | 2565<sub>(+296) |  |
| 0.4.0 | 2026-08-16 | 1886 | 2234 | 2269 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2102<sub>(+240) | 2394<sub>(+243) | 2523<sub>(+322) |  |
| 0.4.0 | 2026-08-16 | 1862 | 2151 | 2201 |  |
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

Generated: 2026-11-22 05:36:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1800 --> 2600
  line "E1: STC (8.0+0.08s)" [1886, 2109]
  line "E1: LTC (60.0+0.60s)" [2234, 2444]
  line "E1: VLTC (2m24s+1.12s)" [2269, 2565]
  line "P1: STC (8.0+0.08s)" [1862, 2102]
  line "P1: LTC (60.0+0.60s)" [2151, 2394]
  line "P1: VLTC (2m24s+1.12s)" [2201, 2523]
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
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2565 | 27 | 488 | 47% | 2601 | 26% |
|  |  | T1 | 2607 | 35 | 264 | 51% | 2593 | 34% |
|  |  | P1 | 2523 | 34 | 310 | 45% | 2585 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2493 | 35 | 264 | 48% | 2515 | 31% |
|  |  | P1 | 2394 | 37 | 254 | 48% | 2414 | 33% |
|  |  | E1 | 2444 | 30 | 386 | 47% | 2481 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2203 | 34 | 308 | 46% | 2237 | 24% |
|  |  | P1 | 2102 | 36 | 272 | 50% | 2120 | 22% |
|  |  | E1 | 2109 | 28 | 458 | 47% | 2174 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2341 | 34 | 296 | 51% | 2333 | 25% |
|  |  | P1 | 2201 | 61 | 104 | 37% | 2314 | 30% |
|  |  | E1 | 2269 | 54 | 124 | 44% | 2310 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2255 | 35 | 280 | 50% | 2253 | 23% |
|  |  | P1 | 2151 | 63 | 116 | 55% | 2064 | 13% |
|  |  | E1 | 2234 | 62 | 106 | 56% | 2115 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1963 | 37 | 256 | 50% | 1962 | 21% |
|  |  | P1 | 1862 | 62 | 108 | 46% | 1947 | 19% |
|  |  | E1 | 1886 | 52 | 152 | 54% | 1851 | 19% |