# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2614<sub>(+372) | 2903<sub>(+380) | 2927<sub>(+351) |  |
| 1.2 | 2026-10-14 | 2242<sub>(+467) | 2523<sub>(+489) | 2576<sub>(+510) |  |
| 1.0 | 2025-11-25 | 1775 | 2034 | 2066 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2615<sub>(+522) | 2878<sub>(+456) | 2967<sub>(+433) |  |
| 1.2 | 2026-10-14 | 2093<sub>(+345) | 2422<sub>(+517) | 2534<sub>(+510) |  |
| 1.0 | 2025-11-25 | 1748 | 1905 | 2024 |  |
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

Generated: 2026-11-13 05:37:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3000
  line "E1: STC (8.0+0.08s)" [1775, 2242, 2614]
  line "E1: LTC (60.0+0.60s)" [2034, 2523, 2903]
  line "E1: VLTC (2m24s+1.12s)" [2066, 2576, 2927]
  line "P1: STC (8.0+0.08s)" [1748, 2093, 2615]
  line "P1: LTC (60.0+0.60s)" [1905, 2422, 2878]
  line "P1: VLTC (2m24s+1.12s)" [2024, 2534, 2967]
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
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2927 | 33 | 280 | 52% | 2908 | 41% |
|  |  | P1 | 2967 | 41 | 172 | 49% | 2971 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2903 | 27 | 410 | 48% | 2915 | 42% |
|  |  | P1 | 2878 | 38 | 202 | 49% | 2880 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2615 | 48 | 148 | 57% | 2545 | 29% |
|  |  | E1 | 2614 | 32 | 328 | 54% | 2570 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2534 | 44 | 166 | 53% | 2500 | 35% |
|  |  | E1 | 2576 | 35 | 286 | 49% | 2579 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2422 | 46 | 168 | 53% | 2380 | 26% |
|  |  | E1 | 2523 | 36 | 278 | 51% | 2506 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2093 | 48 | 154 | 47% | 2117 | 20% |
|  |  | E1 | 2242 | 35 | 292 | 47% | 2279 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2024 | 51 | 156 | 54% | 1974 | 15% |
|  |  | E1 | 2066 | 42 | 208 | 45% | 2163 | 24% |
|  |  | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2034 | 40 | 228 | 45% | 2111 | 23% |
|  |  | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 1905 | 46 | 164 | 49% | 1926 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1775 | 42 | 204 | 50% | 1778 | 20% |
|  |  | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1748 | 40 | 216 | 50% | 1747 | 23% |