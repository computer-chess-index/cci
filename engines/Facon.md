# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2687<sub>(+322) | 3002<sub>(+255) | 3066<sub>(+200) |  |
| 1.7 | 2026-10-04 | 2365<sub>(+289) | 2747<sub>(+382) | 2866<sub>(+417) |  |
| 1.5 | 2026-05-26 | 2076 | 2365 | 2449 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2668<sub>(+350) | 2965<sub>(+245) | 3079<sub>(+266) |  |
| 1.7 | 2026-10-04 | 2318<sub>(+215) | 2720<sub>(+336) | 2813<sub>(+418) |  |
| 1.5 | 2026-05-26 | 2103 | 2384 | 2395 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2381<sub>(+216) | 2624<sub>(+220) | 2757<sub>(+246) |  |
| 1.5 | 2026-05-26 | 2165<sub>(+156) | 2404<sub>(+106) | 2511<sub>(+154) |  |
| 1.4 | 2026-04-25 | 2009<sub>(+489) | 2298<sub>(+436) | 2357<sub>(+381) |  |
| 1.3 | 2026-04-11 | 1520 | 1862 | 1976 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:38:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.7", "1.8"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2076, 2365, 2687]
  line "E1: LTC (60.0+0.60s)" [2365, 2747, 3002]
  line "E1: VLTC (2m24s+1.12s)" [2449, 2866, 3066]
  line "P1: STC (8.0+0.08s)" [2103, 2318, 2668]
  line "P1: LTC (60.0+0.60s)" [2384, 2720, 2965]
  line "P1: VLTC (2m24s+1.12s)" [2395, 2813, 3079]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "T1: STC (8.0+0.08s)" [1520, 2009, 2165, 2381]
  line "T1: LTC (60.0+0.60s)" [1862, 2298, 2404, 2624]
  line "T1: VLTC (2m24s+1.12s)" [1976, 2357, 2511, 2757]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3079 | 37 | 216 | 48% | 3097 | 45% |
|  |  | E1 | 3066 | 29 | 338 | 51% | 3054 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2965 | 31 | 306 | 51% | 2962 | 46% |
|  |  | E1 | 3002 | 29 | 374 | 49% | 3009 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2668 | 38 | 216 | 50% | 2673 | 36% |
|  |  | E1 | 2687 | 33 | 300 | 54% | 2654 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2813 | 37 | 238 | 50% | 2808 | 37% |
|  |  | E1 | 2866 | 33 | 310 | 50% | 2849 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2720 | 36 | 256 | 55% | 2655 | 36% |
|  |  | E1 | 2747 | 35 | 286 | 48% | 2762 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2318 | 38 | 236 | 56% | 2253 | 28% |
|  |  | E1 | 2365 | 32 | 324 | 52% | 2348 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2757 | 32 | 314 | 46% | 2785 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2624 | 34 | 280 | 51% | 2610 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2511 | 32 | 330 | 50% | 2510 | 26% |
|  |  | P1 | 2395 | 49 | 144 | 48% | 2422 | 24% |
|  |  | E1 | 2449 | 41 | 208 | 51% | 2445 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2404 | 35 | 262 | 51% | 2396 | 34% |
|  |  | P1 | 2384 | 47 | 154 | 44% | 2465 | 31% |
|  |  | E1 | 2365 | 46 | 172 | 44% | 2454 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2165 | 31 | 374 | 52% | 2145 | 22% |
|  |  | P1 | 2103 | 50 | 144 | 48% | 2125 | 19% |
|  |  | E1 | 2076 | 36 | 286 | 49% | 2070 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2357 | 29 | 420 | 51% | 2345 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2298 | 31 | 380 | 53% | 2264 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2009 | 30 | 406 | 51% | 1991 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1976 | 34 | 324 | 48% | 1993 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1862 | 32 | 364 | 50% | 1859 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1520 | 32 | 378 | 50% | 1515 | 19% |