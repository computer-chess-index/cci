# Engine: Ariadne

Author: Liam Galvin

Home: https://github.com/liamg/ariadne

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2109<sub>(+224) | 2441<sub>(+220) | 2562<sub>(+289) |  |
| 0.4.0 | 2026-08-16 | 1885 | 2221 | 2273 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2117<sub>(+212) | 2414<sub>(+230) | 2542<sub>(+290) |  |
| 0.4.0 | 2026-08-16 | 1905 | 2184 | 2252 |  |
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

Generated: 2026-11-26 05:36:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1800 --> 2600
  line "E1: STC (8.0+0.08s)" [1885, 2109]
  line "E1: LTC (60.0+0.60s)" [2221, 2441]
  line "E1: VLTC (2m24s+1.12s)" [2273, 2562]
  line "P1: STC (8.0+0.08s)" [1905, 2117]
  line "P1: LTC (60.0+0.60s)" [2184, 2414]
  line "P1: VLTC (2m24s+1.12s)" [2252, 2542]
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
|  |  | P1 | 2542 | 33 | 314 | 46% | 2600 | 27% |
|  |  | E1 | 2562 | 26 | 500 | 47% | 2600 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2493 | 35 | 264 | 48% | 2515 | 31% |
|  |  | P1 | 2414 | 35 | 278 | 49% | 2426 | 34% |
|  |  | E1 | 2441 | 29 | 402 | 47% | 2481 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2203 | 34 | 308 | 46% | 2237 | 24% |
|  |  | P1 | 2117 | 36 | 276 | 50% | 2133 | 22% |
|  |  | E1 | 2109 | 28 | 470 | 47% | 2176 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2341 | 34 | 296 | 51% | 2333 | 25% |
|  |  | P1 | 2252 | 58 | 112 | 41% | 2327 | 29% |
|  |  | E1 | 2273 | 54 | 128 | 45% | 2313 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2255 | 35 | 280 | 50% | 2253 | 23% |
|  |  | P1 | 2184 | 57 | 136 | 56% | 2093 | 14% |
|  |  | E1 | 2221 | 58 | 118 | 54% | 2129 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1963 | 37 | 256 | 50% | 1962 | 21% |
|  |  | P1 | 1905 | 56 | 128 | 50% | 1948 | 20% |
|  |  | E1 | 1885 | 50 | 156 | 53% | 1854 | 21% |