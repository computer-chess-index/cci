# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2098<sub>(+216) | 2325<sub>(+255) | 2439<sub>(+279) |  |
| 2.0 | 2026-03-08 | 1882 | 2070 | 2160 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2040<sub>(+224) | 2304<sub>(+314) | 2327<sub>(+70) |  |
| 2.0 | 2026-03-08 | 1816 | 1990 | 2257 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2133<sub>(+227) | 2388<sub>(+227) | 2421<sub>(+162) |  |
| 2.0 | 2026-03-08 | 1906 | 2161 | 2259 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeno+<version>&body=###%20Engine%20name%0AZeno%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:44:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "E1: STC (8.0+0.08s)" [1882, 2098]
  line "E1: LTC (60.0+0.60s)" [2070, 2325]
  line "E1: VLTC (2m24s+1.12s)" [2160, 2439]
  line "P1: STC (8.0+0.08s)" [1816, 2040]
  line "P1: LTC (60.0+0.60s)" [1990, 2304]
  line "P1: VLTC (2m24s+1.12s)" [2257, 2327]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "T1: STC (8.0+0.08s)" [1906, 2133]
  line "T1: LTC (60.0+0.60s)" [2161, 2388]
  line "T1: VLTC (2m24s+1.12s)" [2259, 2421]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2421 | 34 | 296 | 51% | 2408 | 27% |
|  |  | P1 | 2327 | 36 | 276 | 45% | 2404 | 28% |
|  |  | E1 | 2439 | 34 | 328 | 50% | 2435 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2388 | 34 | 304 | 51% | 2381 | 20% |
|  |  | P1 | 2304 | 37 | 276 | 46% | 2367 | 19% |
|  |  | E1 | 2325 | 31 | 364 | 48% | 2344 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2133 | 36 | 280 | 53% | 2101 | 22% |
|  |  | P1 | 2040 | 40 | 230 | 51% | 2041 | 21% |
|  |  | E1 | 2098 | 35 | 300 | 48% | 2128 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2259 | 30 | 384 | 49% | 2279 | 24% |
|  |  | P1 | 2257 | 109 | 46 | 62% | 2014 | 11% |
|  |  | E1 | 2160 | 79 | 64 | 53% | 2165 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1990 | 84 | 56 | 44% | 2068 | 13% |
|  |  | E1 | 2070 | 72 | 72 | 47% | 2121 | 22% |
|  |  | T1 | 2161 | 28 | 460 | 49% | 2168 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1816 | 80 | 66 | 39% | 1990 | 17% |
|  |  | E1 | 1882 | 71 | 82 | 41% | 2095 | 21% |
|  |  | T1 | 1906 | 27 | 482 | 48% | 1925 | 20% |