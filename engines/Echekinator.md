# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2615<sub>(+375) | 2921<sub>(+398) | 2952<sub>(+361) |  |
| 1.2 | 2026-10-14 | 2240<sub>(+231) | 2523<sub>(+185) | 2591<sub>(+165) |  |
| 1.1 | 2026-09-30 | 2009<sub>(+259) | 2338<sub>(+316) | 2426<sub>(+371) |  |
| 1.0 | 2025-11-25 | 1750 | 2022 | 2055 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2651<sub>(+509) | 2900<sub>(+448) | 2979<sub>(+414) |  |
| 1.2 | 2026-10-14 | 2142<sub>(+83) | 2452<sub>(+134) | 2565<sub>(+228) |  |
| 1.1 | 2026-09-30 | 2059<sub>(+295) | 2318<sub>(+400) | 2337<sub>(+293) |  |
| 1.0 | 2025-11-25 | 1764 | 1918 | 2044 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-09-30 | 2098<sub>(+324) | 2331<sub>(+270) | 2418<sub>(+262) |  |
| 1.0 | 2025-11-25 | 1774 | 2061 | 2156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echekinator+<version>&body=###%20Engine%20name%0AEchekinator%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:38:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3000
  line "E1: STC (8.0+0.08s)" [1750, 2009, 2240, 2615]
  line "E1: LTC (60.0+0.60s)" [2022, 2338, 2523, 2921]
  line "E1: VLTC (2m24s+1.12s)" [2055, 2426, 2591, 2952]
  line "P1: STC (8.0+0.08s)" [1764, 2059, 2142, 2651]
  line "P1: LTC (60.0+0.60s)" [1918, 2318, 2452, 2900]
  line "P1: VLTC (2m24s+1.12s)" [2044, 2337, 2565, 2979]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1774, 2098]
  line "T1: LTC (60.0+0.60s)" [2061, 2331]
  line "T1: VLTC (2m24s+1.12s)" [2156, 2418]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2979 | 37 | 210 | 49% | 2988 | 47% |
|  |  | E1 | 2952 | 31 | 316 | 52% | 2934 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2900 | 34 | 258 | 49% | 2894 | 46% |
|  |  | E1 | 2921 | 25 | 468 | 48% | 2936 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2651 | 41 | 212 | 55% | 2606 | 29% |
|  |  | E1 | 2615 | 30 | 384 | 53% | 2587 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2565 | 44 | 170 | 53% | 2534 | 35% |
|  |  | E1 | 2591 | 34 | 294 | 49% | 2596 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2452 | 42 | 204 | 52% | 2414 | 26% |
|  |  | E1 | 2523 | 33 | 326 | 51% | 2498 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2142 | 42 | 196 | 49% | 2151 | 22% |
|  |  | E1 | 2240 | 33 | 324 | 47% | 2276 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  |  | P1 | 2337 | 65 | 84 | 36% | 2493 | 31% |
|  |  | E1 | 2426 | 35 | 286 | 45% | 2472 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  |  | P1 | 2318 | 52 | 136 | 41% | 2414 | 21% |
|  |  | E1 | 2338 | 45 | 176 | 45% | 2390 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
|  |  | P1 | 2059 | 49 | 148 | 41% | 2153 | 27% |
|  |  | E1 | 2009 | 38 | 254 | 53% | 1987 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2055 | 42 | 208 | 45% | 2155 | 24% |
|  |  | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2044 | 51 | 156 | 54% | 1994 | 15% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2022 | 40 | 228 | 45% | 2102 | 23% |
|  |  | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 1918 | 46 | 164 | 49% | 1941 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1764 | 40 | 216 | 50% | 1763 | 23% |
|  |  | E1 | 1750 | 42 | 204 | 50% | 1752 | 20% |