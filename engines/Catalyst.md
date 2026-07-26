# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2651<sub>(+85) | 3071<sub>(+128) | 3123<sub>(+80) |  |
| 2.2.0 | 2026-04-03 | 2566<sub>(-18) | 2943<sub>(+31) | 3043<sub>(+135) |  |
| 2.1.0 | 2026-04-02 | 2584<sub>(+5) | 2912<sub>(-28) | 2908<sub>(-66) |  |
| 2.0.0 | 2026-03-29 | 2579<sub>(+277) | 2940<sub>(+183) | 2974<sub>(+107) |  |
| 1.0.0 | 2026-03-26 | 2302 | 2757 | 2867 |  |
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

Generated: 2026-07-26 06:23:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2302, 2579, 2584, 2566, 2651]
  line "STC (8.0+0.08s)" [2302, 2579, 2584, 2566, 2651]
  line "LTC (60.0+0.60s)" [2757, 2940, 2912, 2943, 3071]
  line "VLTC (2m24s+1.12s)" [2867, 2974, 2908, 3043, 3123]
  line "VLTC (2m24s+1.12s)" [2867, 2974, 2908, 3043, 3123]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 38 | 202 | 48% | 3140 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3071 | 43 | 150 | 51% | 3067 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2651 | 50 | 128 | 50% | 2653 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3043 | 34 | 242 | 51% | 3039 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2943 | 35 | 238 | 50% | 2938 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2566 | 34 | 274 | 50% | 2566 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2908 | 31 | 292 | 49% | 2919 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2912 | 34 | 248 | 49% | 2916 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2584 | 35 | 256 | 48% | 2597 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2974 | 31 | 288 | 49% | 2981 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2940 | 32 | 280 | 51% | 2932 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2579 | 30 | 336 | 48% | 2595 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2867 | 32 | 302 | 49% | 2877 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2757 | 34 | 268 | 48% | 2774 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2302 | 35 | 272 | 46% | 2338 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |