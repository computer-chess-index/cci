# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2566<sub>(+44) | 2896<sub>(+38) | 2969<sub>(+46) |  |
| 2.0 | 2026-06-14 | 2522 | 2858 | 2923 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2547<sub>(+91) | 2846<sub>(+91) | 2950<sub>(+103) |  |
| 2.0 | 2026-06-14 | 2456 | 2755 | 2847 |  |
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

Generated: 2026-11-22 05:40:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2522, 2566]
  line "E1: LTC (60.0+0.60s)" [2858, 2896]
  line "E1: VLTC (2m24s+1.12s)" [2923, 2969]
  line "P1: STC (8.0+0.08s)" [2456, 2547]
  line "P1: LTC (60.0+0.60s)" [2755, 2846]
  line "P1: VLTC (2m24s+1.12s)" [2847, 2950]
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
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2948 | 34 | 260 | 52% | 2935 | 45% |
|  |  | P1 | 2950 | 47 | 136 | 49% | 2961 | 41% |
|  |  | E1 | 2969 | 33 | 308 | 55% | 2853 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2893 | 37 | 224 | 52% | 2878 | 43% |
|  |  | P1 | 2846 | 45 | 150 | 49% | 2855 | 43% |
|  |  | E1 | 2896 | 33 | 312 | 58% | 2745 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2642 | 39 | 220 | 48% | 2658 | 30% |
|  |  | P1 | 2547 | 49 | 144 | 49% | 2561 | 26% |
|  |  | E1 | 2566 | 38 | 248 | 49% | 2568 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2942 | 49 | 128 | 56% | 2894 | 41% |
|  |  | P1 | 2847 | 86 | 48 | 39% | 2942 | 31% |
|  |  | E1 | 2923 | 83 | 48 | 51% | 2859 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2838 | 56 | 92 | 51% | 2826 | 46% |
|  |  | P1 | 2755 | 96 | 42 | 56% | 2708 | 17% |
|  |  | E1 | 2858 | 80 | 54 | 50% | 2835 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2456 | 79 | 60 | 43% | 2506 | 25% |
|  |  | E1 | 2522 | 71 | 72 | 42% | 2654 | 32% |
|  |  | T1 | 2606 | 52 | 124 | 44% | 2661 | 31% |