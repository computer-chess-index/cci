# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2558<sub>(+40) | 2892<sub>(+37) | 2967<sub>(+46) |  |
| 2.0 | 2026-06-14 | 2518 | 2855 | 2921 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2534<sub>(+59) | 2832<sub>(+127) | 2932<sub>(+50) |  |
| 2.0 | 2026-06-14 | 2475 | 2705 | 2882 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2642<sub>(+36) | 2893<sub>(+55) | 2948<sub>(+6) |  |
| 2.0 | 2026-06-14 | 2606 | 2838 | 2942 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Noggin+<version>&body=###%20Engine%20name%0ANoggin%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:41:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2518, 2558]
  line "E1: LTC (60.0+0.60s)" [2855, 2892]
  line "E1: VLTC (2m24s+1.12s)" [2921, 2967]
  line "P1: STC (8.0+0.08s)" [2475, 2534]
  line "P1: LTC (60.0+0.60s)" [2705, 2832]
  line "P1: VLTC (2m24s+1.12s)" [2882, 2932]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2600 --> 3000
  line "T1: STC (8.0+0.08s)" [2606, 2642]
  line "T1: LTC (60.0+0.60s)" [2838, 2893]
  line "T1: VLTC (2m24s+1.12s)" [2942, 2948]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2932 | 48 | 132 | 48% | 2948 | 41% |
|  |  | E1 | 2967 | 34 | 296 | 56% | 2836 | 36% |
|  |  | T1 | 2948 | 34 | 260 | 52% | 2935 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2832 | 47 | 142 | 49% | 2844 | 43% |
|  |  | E1 | 2892 | 34 | 300 | 58% | 2736 | 36% |
|  |  | T1 | 2893 | 37 | 224 | 52% | 2878 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2558 | 41 | 208 | 49% | 2542 | 29% |
|  |  | T1 | 2642 | 39 | 220 | 48% | 2658 | 30% |
|  |  | P1 | 2534 | 51 | 132 | 48% | 2549 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2942 | 49 | 128 | 56% | 2894 | 41% |
|  |  | P1 | 2882 | 100 | 36 | 40% | 2950 | 31% |
|  |  | E1 | 2921 | 83 | 48 | 51% | 2858 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2838 | 56 | 92 | 51% | 2826 | 46% |
|  |  | P1 | 2705 | 109 | 34 | 53% | 2697 | 12% |
|  |  | E1 | 2855 | 80 | 54 | 50% | 2832 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2606 | 52 | 124 | 44% | 2661 | 31% |
|  |  | P1 | 2475 | 91 | 44 | 43% | 2508 | 27% |
|  |  | E1 | 2518 | 71 | 72 | 42% | 2650 | 32% |