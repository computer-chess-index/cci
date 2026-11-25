# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2295<sub>(+42) | 2718<sub>(+18) | 2878<sub>(+106) |  |
| 1.4 | 2011-02-01 | 2253 | 2700 | 2772 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2298<sub>(+33) | 2704<sub>(+38) | 2776<sub>(+61) |  |
| 1.4 | 2011-02-01 | 2265 | 2666 | 2715 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2403<sub>(+55) | 2722<sub>(-19) | 2843<sub>(+12) |  |
| 1.4 | 2011-02-01 | 2348 | 2741 | 2831 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Spike+<version>&body=###%20Engine%20name%0ASpike%0A%0A###%20Version%0A1.4.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:43:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2253, 2295]
  line "E1: LTC (60.0+0.60s)" [2700, 2718]
  line "E1: VLTC (2m24s+1.12s)" [2772, 2878]
  line "P1: STC (8.0+0.08s)" [2265, 2298]
  line "P1: LTC (60.0+0.60s)" [2666, 2704]
  line "P1: VLTC (2m24s+1.12s)" [2715, 2776]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2348, 2403]
  line "T1: LTC (60.0+0.60s)" [2741, 2722]
  line "T1: VLTC (2m24s+1.12s)" [2831, 2843]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2776 | 32 | 326 | 46% | 2822 | 30% |
|  |  | E1 | 2878 | 27 | 434 | 51% | 2869 | 34% |
|  |  | T1 | 2843 | 35 | 258 | 51% | 2839 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2718 | 29 | 412 | 46% | 2757 | 31% |
|  |  | T1 | 2722 | 34 | 282 | 51% | 2718 | 29% |
|  |  | P1 | 2704 | 33 | 312 | 50% | 2705 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2295 | 29 | 438 | 48% | 2306 | 24% |
|  |  | T1 | 2403 | 35 | 276 | 51% | 2395 | 30% |
|  |  | P1 | 2298 | 36 | 264 | 48% | 2319 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2831 | 45 | 164 | 51% | 2830 | 32% |
|  |  | P1 | 2715 | 58 | 104 | 52% | 2660 | 28% |
|  |  | E1 | 2772 | 55 | 120 | 50% | 2734 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2666 | 61 | 104 | 56% | 2518 | 19% |
|  |  | T1 | 2741 | 48 | 144 | 50% | 2738 | 27% |
|  |  | E1 | 2700 | 49 | 152 | 55% | 2587 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2265 | 55 | 132 | 43% | 2280 | 25% |
|  |  | T1 | 2348 | 32 | 404 | 45% | 2417 | 23% |
|  |  | E1 | 2253 | 54 | 132 | 51% | 2214 | 16% |