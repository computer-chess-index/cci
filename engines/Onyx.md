# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2839<sub>(+339) | 3151<sub>(+213) | 3222<sub>(+194) |  |
| 1.6 | 2026-06-13 | 2500 | 2938 | 3028 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2876<sub>(+250) | 3102<sub>(+235) | 3191<sub>(+198) |  |
| 1.6 | 2026-06-13 | 2626 | 2867 | 2993 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2897<sub>(+262) | 3166<sub>(+224) | 3233<sub>(+204) |  |
| 1.6 | 2026-06-13 | 2635 | 2942 | 3029 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onyx+<version>&body=###%20Engine%20name%0AOnyx%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:40:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2500 --> 3300
  line "E1: STC (8.0+0.08s)" [2500, 2839]
  line "E1: LTC (60.0+0.60s)" [2938, 3151]
  line "E1: VLTC (2m24s+1.12s)" [3028, 3222]
  line "P1: STC (8.0+0.08s)" [2626, 2876]
  line "P1: LTC (60.0+0.60s)" [2867, 3102]
  line "P1: VLTC (2m24s+1.12s)" [2993, 3191]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "T1: STC (8.0+0.08s)" [2635, 2897]
  line "T1: LTC (60.0+0.60s)" [2942, 3166]
  line "T1: VLTC (2m24s+1.12s)" [3029, 3233]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3191 | 31 | 282 | 50% | 3191 | 60% |
|  |  | E1 | 3222 | 25 | 452 | 47% | 3249 | 54% |
|  |  | T1 | 3233 | 28 | 342 | 50% | 3235 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3102 | 30 | 320 | 47% | 3127 | 48% |
|  |  | E1 | 3151 | 26 | 436 | 47% | 3175 | 50% |
|  |  | T1 | 3166 | 29 | 346 | 50% | 3164 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2876 | 32 | 300 | 50% | 2889 | 40% |
|  |  | E1 | 2839 | 26 | 472 | 46% | 2859 | 39% |
|  |  | T1 | 2897 | 29 | 370 | 49% | 2904 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3029 | 32 | 296 | 48% | 3044 | 40% |
|  |  | P1 | 2993 | 75 | 60 | 53% | 2866 | 38% |
|  |  | E1 | 3028 | 64 | 84 | 58% | 2865 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2942 | 34 | 264 | 46% | 2973 | 41% |
|  |  | P1 | 2867 | 77 | 60 | 57% | 2780 | 33% |
|  |  | E1 | 2938 | 65 | 78 | 46% | 2978 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2635 | 34 | 276 | 50% | 2641 | 33% |
|  |  | P1 | 2626 | 69 | 72 | 47% | 2677 | 33% |
|  |  | E1 | 2500 | 54 | 120 | 53% | 2464 | 22% |