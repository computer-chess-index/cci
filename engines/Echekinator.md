# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2678<sub>(+392) | 2986<sub>(+399) | 3005<sub>(+363) |  |
| 1.2 | 2026-10-14 | 2286<sub>(+495) | 2587<sub>(+523) | 2642<sub>(+547) |  |
| 1.0 | 2025-11-25 | 1791 | 2064 | 2095 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2755<sub>(+553) | 3028<sub>(+466) | 3117<sub>(+437) |  |
| 1.2 | 2026-10-14 | 2202<sub>(+390) | 2562<sub>(+573) | 2680<sub>(+566) |  |
| 1.0 | 2025-11-25 | 1812 | 1989 | 2114 |  |
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

Generated: 2026-11-08 05:37:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3200
  line "E1: STC (8.0+0.08s)" [1791, 2286, 2678]
  line "E1: LTC (60.0+0.60s)" [2064, 2587, 2986]
  line "E1: VLTC (2m24s+1.12s)" [2095, 2642, 3005]
  line "P1: STC (8.0+0.08s)" [1812, 2202, 2755]
  line "P1: LTC (60.0+0.60s)" [1989, 2562, 3028]
  line "P1: VLTC (2m24s+1.12s)" [2114, 2680, 3117]
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
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3005 | 35 | 256 | 52% | 2985 | 40% |
|  |  | P1 | 3117 | 47 | 136 | 49% | 3124 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3028 | 39 | 190 | 48% | 3035 | 47% |
|  |  | E1 | 2986 | 28 | 386 | 48% | 2998 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2755 | 50 | 140 | 58% | 2672 | 29% |
|  |  | E1 | 2678 | 35 | 280 | 56% | 2622 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2680 | 45 | 162 | 53% | 2645 | 36% |
|  |  | E1 | 2642 | 36 | 270 | 50% | 2638 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2562 | 47 | 156 | 52% | 2534 | 27% |
|  |  | E1 | 2587 | 36 | 270 | 50% | 2592 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2202 | 49 | 150 | 48% | 2217 | 20% |
|  |  | E1 | 2286 | 36 | 280 | 49% | 2294 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2095 | 42 | 208 | 45% | 2196 | 24% |
|  |  | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2114 | 51 | 156 | 54% | 2060 | 15% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2064 | 40 | 228 | 45% | 2144 | 23% |
|  |  | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 1989 | 46 | 164 | 49% | 2013 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1791 | 42 | 204 | 50% | 1794 | 20% |
|  |  | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1812 | 40 | 216 | 50% | 1810 | 23% |