# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2653<sub>(+84) | 3075<sub>(+129) | 3128<sub>(+81) |  |
| 2.2.0 | 2026-04-03 | 2569<sub>(-18) | 2946<sub>(+31) | 3047<sub>(+136) |  |
| 2.1.0 | 2026-04-02 | 2587<sub>(+6) | 2915<sub>(-28) | 2911<sub>(-67) |  |
| 2.0.0 | 2026-03-29 | 2581<sub>(+275) | 2943<sub>(+184) | 2978<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2306 | 2759 | 2870 |  |
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

Generated: 2026-08-20 06:23:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2306, 2581, 2587, 2569, 2653]
  line "STC (8.0+0.08s)" [2306, 2581, 2587, 2569, 2653]
  line "LTC (60.0+0.60s)" [2759, 2943, 2915, 2946, 3075]
  line "VLTC (2m24s+1.12s)" [2870, 2978, 2911, 3047, 3128]
  line "VLTC (2m24s+1.12s)" [2870, 2978, 2911, 3047, 3128]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3128 | 38 | 202 | 48% | 3146 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3075 | 43 | 150 | 51% | 3071 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2653 | 50 | 128 | 50% | 2655 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3047 | 34 | 242 | 51% | 3043 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2946 | 35 | 238 | 50% | 2940 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2569 | 34 | 274 | 50% | 2569 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2911 | 31 | 292 | 49% | 2921 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2915 | 34 | 248 | 49% | 2919 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2587 | 35 | 256 | 48% | 2600 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2978 | 31 | 288 | 49% | 2985 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2943 | 32 | 280 | 51% | 2935 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2581 | 30 | 336 | 48% | 2597 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2870 | 32 | 302 | 49% | 2880 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2759 | 34 | 268 | 48% | 2777 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2306 | 35 | 272 | 46% | 2342 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |