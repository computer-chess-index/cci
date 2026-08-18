# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2653<sub>(+84) | 3074<sub>(+128) | 3127<sub>(+80) |  |
| 2.2.0 | 2026-04-03 | 2569<sub>(-18) | 2946<sub>(+31) | 3047<sub>(+136) |  |
| 2.1.0 | 2026-04-02 | 2587<sub>(+6) | 2915<sub>(-28) | 2911<sub>(-66) |  |
| 2.0.0 | 2026-03-29 | 2581<sub>(+277) | 2943<sub>(+184) | 2977<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2304 | 2759 | 2869 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:23:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2304, 2581, 2587, 2569, 2653]
  line "STC (8.0+0.08s)" [2304, 2581, 2587, 2569, 2653]
  line "LTC (60.0+0.60s)" [2759, 2943, 2915, 2946, 3074]
  line "VLTC (2m24s+1.12s)" [2869, 2977, 2911, 3047, 3127]
  line "VLTC (2m24s+1.12s)" [2869, 2977, 2911, 3047, 3127]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3127 | 38 | 202 | 48% | 3144 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3074 | 43 | 150 | 51% | 3070 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2653 | 50 | 128 | 50% | 2654 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3047 | 34 | 242 | 51% | 3042 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2946 | 35 | 238 | 50% | 2939 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2569 | 34 | 274 | 50% | 2568 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2911 | 31 | 292 | 49% | 2921 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2915 | 34 | 248 | 49% | 2919 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2587 | 35 | 256 | 48% | 2600 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2977 | 31 | 288 | 49% | 2984 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2943 | 32 | 280 | 51% | 2935 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2581 | 30 | 336 | 48% | 2596 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 32 | 302 | 49% | 2878 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2759 | 34 | 268 | 48% | 2777 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2304 | 35 | 272 | 46% | 2342 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |