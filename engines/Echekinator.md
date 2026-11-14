# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2626<sub>(+377) | 2923<sub>(+388) | 2946<sub>(+355) |  |
| 1.2 | 2026-10-14 | 2249<sub>(+478) | 2535<sub>(+499) | 2591<sub>(+524) |  |
| 1.0 | 2025-11-25 | 1771 | 2036 | 2067 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2599<sub>(+519) | 2847<sub>(+440) | 2931<sub>(+411) |  |
| 1.2 | 2026-10-14 | 2080<sub>(+340) | 2407<sub>(+513) | 2520<sub>(+502) |  |
| 1.0 | 2025-11-25 | 1740 | 1894 | 2018 |  |
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

Generated: 2026-11-14 05:37:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3000
  line "E1: STC (8.0+0.08s)" [1771, 2249, 2626]
  line "E1: LTC (60.0+0.60s)" [2036, 2535, 2923]
  line "E1: VLTC (2m24s+1.12s)" [2067, 2591, 2946]
  line "P1: STC (8.0+0.08s)" [1740, 2080, 2599]
  line "P1: LTC (60.0+0.60s)" [1894, 2407, 2847]
  line "P1: VLTC (2m24s+1.12s)" [2018, 2520, 2931]
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
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2931 | 41 | 174 | 49% | 2939 | 48% |
|  |  | E1 | 2946 | 33 | 280 | 52% | 2927 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2847 | 37 | 214 | 48% | 2853 | 46% |
|  |  | E1 | 2923 | 27 | 418 | 48% | 2934 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2626 | 32 | 336 | 54% | 2587 | 27% |
|  |  | P1 | 2599 | 48 | 156 | 57% | 2529 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2520 | 44 | 166 | 53% | 2487 | 35% |
|  |  | E1 | 2591 | 35 | 286 | 49% | 2593 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2407 | 45 | 176 | 52% | 2369 | 26% |
|  |  | E1 | 2535 | 35 | 290 | 51% | 2511 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2080 | 46 | 166 | 47% | 2109 | 21% |
|  |  | E1 | 2249 | 35 | 300 | 47% | 2287 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2018 | 51 | 156 | 54% | 1968 | 15% |
|  |  | E1 | 2067 | 42 | 208 | 45% | 2165 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1894 | 46 | 164 | 49% | 1917 | 25% |
|  |  | E1 | 2036 | 40 | 228 | 45% | 2114 | 23% |
|  |  | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1740 | 40 | 216 | 50% | 1739 | 23% |
|  |  | E1 | 1771 | 42 | 204 | 50% | 1773 | 20% |
|  |  | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |