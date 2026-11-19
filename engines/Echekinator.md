# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2612<sub>(+375) | 2923<sub>(+403) | 2950<sub>(+363) |  |
| 1.2 | 2026-10-14 | 2237<sub>(+490) | 2520<sub>(+500) | 2587<sub>(+536) |  |
| 1.0 | 2025-11-25 | 1747 | 2020 | 2051 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2619<sub>(+512) | 2871<sub>(+440) | 2944<sub>(+407) |  |
| 1.2 | 2026-10-14 | 2107<sub>(+356) | 2431<sub>(+526) | 2537<sub>(+507) |  |
| 1.0 | 2025-11-25 | 1751 | 1905 | 2030 |  |
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

Generated: 2026-11-19 05:38:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3000
  line "E1: STC (8.0+0.08s)" [1747, 2237, 2612]
  line "E1: LTC (60.0+0.60s)" [2020, 2520, 2923]
  line "E1: VLTC (2m24s+1.12s)" [2051, 2587, 2950]
  line "P1: STC (8.0+0.08s)" [1751, 2107, 2619]
  line "P1: LTC (60.0+0.60s)" [1905, 2431, 2871]
  line "P1: VLTC (2m24s+1.12s)" [2030, 2537, 2944]
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
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2944 | 39 | 194 | 48% | 2957 | 47% |
|  |  | E1 | 2950 | 32 | 308 | 51% | 2932 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2871 | 36 | 230 | 49% | 2862 | 47% |
|  |  | E1 | 2923 | 26 | 444 | 48% | 2936 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2619 | 44 | 184 | 55% | 2574 | 28% |
|  |  | E1 | 2612 | 31 | 356 | 53% | 2581 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2537 | 44 | 170 | 53% | 2507 | 35% |
|  |  | E1 | 2587 | 34 | 294 | 49% | 2592 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2431 | 43 | 188 | 52% | 2391 | 25% |
|  |  | E1 | 2520 | 33 | 326 | 51% | 2496 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2107 | 45 | 176 | 47% | 2133 | 23% |
|  |  | E1 | 2237 | 33 | 324 | 47% | 2273 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2030 | 51 | 156 | 54% | 1980 | 15% |
|  |  | E1 | 2051 | 42 | 208 | 45% | 2151 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 1905 | 46 | 164 | 49% | 1926 | 25% |
|  |  | E1 | 2020 | 40 | 228 | 45% | 2099 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1751 | 40 | 216 | 50% | 1750 | 23% |
|  |  | E1 | 1747 | 42 | 204 | 50% | 1750 | 20% |