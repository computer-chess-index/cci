# Engine: Ariadne

Author: Liam Galvin

Home: https://github.com/liamg/ariadne

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2122<sub>(+302) | 2434<sub>(+162) | 2546<sub>(+247) |  |
| 0.4.0 | 2026-08-16 | 1820 | 2272 | 2299 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2060<sub>(+246) | 2387<sub>(+236) | 2511<sub>(+216) |  |
| 0.4.0 | 2026-08-16 | 1814 | 2151 | 2295 |  |
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

Generated: 2026-11-13 05:35:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1800 --> 2600
  line "E1: STC (8.0+0.08s)" [1820, 2122]
  line "E1: LTC (60.0+0.60s)" [2272, 2434]
  line "E1: VLTC (2m24s+1.12s)" [2299, 2546]
  line "P1: STC (8.0+0.08s)" [1814, 2060]
  line "P1: LTC (60.0+0.60s)" [2151, 2387]
  line "P1: VLTC (2m24s+1.12s)" [2295, 2511]
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
|  |  | P1 | 2511 | 35 | 282 | 45% | 2579 | 27% |
|  |  | E1 | 2546 | 28 | 446 | 46% | 2589 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2493 | 35 | 264 | 48% | 2515 | 31% |
|  |  | P1 | 2387 | 39 | 226 | 48% | 2410 | 33% |
|  |  | E1 | 2434 | 32 | 342 | 46% | 2475 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2203 | 34 | 308 | 46% | 2237 | 24% |
|  |  | P1 | 2060 | 40 | 220 | 46% | 2115 | 22% |
|  |  | E1 | 2122 | 29 | 408 | 48% | 2148 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2341 | 34 | 296 | 51% | 2333 | 25% |
|  |  | P1 | 2295 | 108 | 36 | 40% | 2252 | 19% |
|  |  | E1 | 2299 | 90 | 48 | 45% | 2315 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2255 | 35 | 280 | 50% | 2253 | 23% |
|  |  | P1 | 2151 | 113 | 48 | 55% | 2006 | 6% |
|  |  | E1 | 2272 | 99 | 48 | 65% | 2017 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1963 | 37 | 256 | 50% | 1962 | 21% |
|  |  | P1 | 1814 | 108 | 48 | 33% | 2056 | 13% |
|  |  | E1 | 1820 | 94 | 60 | 48% | 1871 | 12% |