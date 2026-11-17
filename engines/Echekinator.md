# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2624<sub>(+383) | 2930<sub>(+404) | 2961<sub>(+369) |  |
| 1.2 | 2026-10-14 | 2241<sub>(+486) | 2526<sub>(+501) | 2592<sub>(+536) |  |
| 1.0 | 2025-11-25 | 1755 | 2025 | 2056 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2618<sub>(+517) | 2865<sub>(+440) | 2943<sub>(+413) |  |
| 1.2 | 2026-10-14 | 2101<sub>(+357) | 2425<sub>(+524) | 2530<sub>(+504) |  |
| 1.0 | 2025-11-25 | 1744 | 1901 | 2026 |  |
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

Generated: 2026-11-17 05:38:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3000
  line "E1: STC (8.0+0.08s)" [1755, 2241, 2624]
  line "E1: LTC (60.0+0.60s)" [2025, 2526, 2930]
  line "E1: VLTC (2m24s+1.12s)" [2056, 2592, 2961]
  line "P1: STC (8.0+0.08s)" [1744, 2101, 2618]
  line "P1: LTC (60.0+0.60s)" [1901, 2425, 2865]
  line "P1: VLTC (2m24s+1.12s)" [2026, 2530, 2943]
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
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2943 | 40 | 182 | 49% | 2950 | 47% |
|  |  | E1 | 2961 | 32 | 300 | 52% | 2939 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2865 | 37 | 222 | 49% | 2855 | 47% |
|  |  | E1 | 2930 | 26 | 436 | 48% | 2943 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2618 | 45 | 180 | 56% | 2566 | 28% |
|  |  | E1 | 2624 | 31 | 348 | 54% | 2587 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2530 | 44 | 170 | 53% | 2500 | 35% |
|  |  | E1 | 2592 | 34 | 294 | 49% | 2599 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2526 | 33 | 326 | 51% | 2503 | 23% |
|  |  | P1 | 2425 | 43 | 188 | 52% | 2384 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2241 | 33 | 324 | 47% | 2279 | 24% |
|  |  | P1 | 2101 | 45 | 176 | 47% | 2125 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2026 | 51 | 156 | 54% | 1978 | 15% |
|  |  | E1 | 2056 | 42 | 208 | 45% | 2156 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 1901 | 46 | 164 | 49% | 1922 | 25% |
|  |  | E1 | 2025 | 40 | 228 | 45% | 2103 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1744 | 40 | 216 | 50% | 1743 | 23% |
|  |  | E1 | 1755 | 42 | 204 | 50% | 1756 | 20% |