# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-10-14 | 2280<sub>(+479) | 2581<sub>(+511) | 2635<sub>(+536) |  |
| 1.0 | 2025-11-25 | 1801 | 2070 | 2099 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-10-14 | 2217<sub>(+384) | 2587<sub>(+586) | 2688<sub>(+564) |  |
| 1.0 | 2025-11-25 | 1833 | 2001 | 2124 |  |
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

Generated: 2026-11-01 05:38:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2"]
  y-axis "Elo Rating" 1800 --> 2700
  line "E1: STC (8.0+0.08s)" [1801, 2280]
  line "E1: LTC (60.0+0.60s)" [2070, 2581]
  line "E1: VLTC (2m24s+1.12s)" [2099, 2635]
  line "P1: STC (8.0+0.08s)" [1833, 2217]
  line "P1: LTC (60.0+0.60s)" [2001, 2587]
  line "P1: VLTC (2m24s+1.12s)" [2124, 2688]
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
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2688 | 47 | 148 | 54% | 2649 | 33% |
|  |  | E1 | 2635 | 37 | 254 | 49% | 2641 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2587 | 49 | 144 | 53% | 2546 | 27% |
|  |  | E1 | 2581 | 38 | 254 | 49% | 2591 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2217 | 49 | 150 | 48% | 2232 | 20% |
|  |  | E1 | 2280 | 38 | 244 | 49% | 2292 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2124 | 51 | 156 | 54% | 2070 | 15% |
|  |  | E1 | 2099 | 42 | 208 | 45% | 2201 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 2001 | 46 | 164 | 49% | 2025 | 25% |
|  |  | E1 | 2070 | 40 | 228 | 45% | 2149 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1833 | 40 | 216 | 50% | 1832 | 23% |
|  |  | E1 | 1801 | 42 | 204 | 50% | 1802 | 20% |
|  |  | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |