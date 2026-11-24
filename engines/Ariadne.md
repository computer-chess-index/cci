# Engine: Ariadne

Author: Liam Galvin

Home: https://github.com/liamg/ariadne

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2106<sub>(+223) | 2439<sub>(+221) | 2562<sub>(+293) |  |
| 0.4.0 | 2026-08-16 | 1883 | 2218 | 2269 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2110<sub>(+243) | 2404<sub>(+247) | 2531<sub>(+325) |  |
| 0.4.0 | 2026-08-16 | 1867 | 2157 | 2206 |  |
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

Generated: 2026-11-24 05:36:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1800 --> 2600
  line "E1: STC (8.0+0.08s)" [1883, 2106]
  line "E1: LTC (60.0+0.60s)" [2218, 2439]
  line "E1: VLTC (2m24s+1.12s)" [2269, 2562]
  line "P1: STC (8.0+0.08s)" [1867, 2110]
  line "P1: LTC (60.0+0.60s)" [2157, 2404]
  line "P1: VLTC (2m24s+1.12s)" [2206, 2531]
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
|  |  | P1 | 2531 | 34 | 310 | 45% | 2593 | 27% |
|  |  | E1 | 2562 | 26 | 500 | 47% | 2600 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2493 | 35 | 264 | 48% | 2515 | 31% |
|  |  | P1 | 2404 | 35 | 266 | 48% | 2421 | 35% |
|  |  | E1 | 2439 | 30 | 398 | 46% | 2480 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2110 | 36 | 276 | 50% | 2126 | 22% |
|  |  | E1 | 2106 | 28 | 466 | 47% | 2172 | 26% |
|  |  | T1 | 2203 | 34 | 308 | 46% | 2237 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2206 | 61 | 104 | 37% | 2321 | 30% |
|  |  | E1 | 2269 | 54 | 128 | 45% | 2309 | 23% |
|  |  | T1 | 2341 | 34 | 296 | 51% | 2333 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2157 | 63 | 116 | 55% | 2070 | 13% |
|  |  | E1 | 2218 | 59 | 114 | 54% | 2124 | 18% |
|  |  | T1 | 2255 | 35 | 280 | 50% | 2253 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1867 | 62 | 108 | 46% | 1952 | 19% |
|  |  | E1 | 1883 | 50 | 156 | 53% | 1852 | 21% |
|  |  | T1 | 1963 | 37 | 256 | 50% | 1962 | 21% |