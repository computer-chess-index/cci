# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2554<sub>(-16) | 2886<sub>(+197) | 2966<sub>(+27) |  |
| 2.0 | 2026-06-14 | 2570 | 2689 | 2939 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2512<sub>(-21) | 2809<sub>(+62) | 2917<sub>(-52) |  |
| 2.0 | 2026-06-14 | 2533 | 2747 | 2969 |  |
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

Generated: 2026-11-14 05:40:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3000
  line "E1: STC (8.0+0.08s)" [2570, 2554]
  line "E1: LTC (60.0+0.60s)" [2689, 2886]
  line "E1: VLTC (2m24s+1.12s)" [2939, 2966]
  line "P1: STC (8.0+0.08s)" [2533, 2512]
  line "P1: LTC (60.0+0.60s)" [2747, 2809]
  line "P1: VLTC (2m24s+1.12s)" [2969, 2917]
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
|  |  | P1 | 2917 | 49 | 128 | 48% | 2935 | 41% |
|  |  | E1 | 2966 | 34 | 284 | 57% | 2828 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2893 | 37 | 224 | 52% | 2878 | 43% |
|  |  | P1 | 2809 | 48 | 134 | 49% | 2827 | 45% |
|  |  | E1 | 2886 | 34 | 292 | 58% | 2731 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2642 | 39 | 220 | 48% | 2658 | 30% |
|  |  | P1 | 2512 | 53 | 128 | 48% | 2531 | 24% |
|  |  | E1 | 2554 | 42 | 200 | 49% | 2545 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2969 | 149 | 16 | 56% | 2865 | 25% |
|  |  | E1 | 2939 | 92 | 40 | 54% | 2836 | 38% |
|  |  | T1 | 2942 | 49 | 128 | 56% | 2894 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2747 | 171 | 16 | 63% | 2635 | 13% |
|  |  | E1 | 2689 | 233 | 12 | 46% | 2759 | 8% |
|  |  | T1 | 2838 | 56 | 92 | 51% | 2826 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2533 | 133 | 24 | 50% | 2480 | 17% |
|  |  | E1 | 2570 | 90 | 44 | 40% | 2759 | 34% |
|  |  | T1 | 2606 | 52 | 124 | 44% | 2661 | 31% |