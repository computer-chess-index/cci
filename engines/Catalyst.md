# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-04-23 | 2653<sub>(+85) | 3069<sub>(+129) | 3120<sub>(+78) |  |
| 2.2.0 | 2026-04-03 | 2568<sub>(-16) | 2940<sub>(+31) | 3042<sub>(+137) |  |
| 2.1.0 | 2026-04-02 | 2584<sub>(+5) | 2909<sub>(-29) | 2905<sub>(-68) |  |
| 2.0.0 | 2026-03-29 | 2579<sub>(+273) | 2938<sub>(+183) | 2973<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2306 | 2755 | 2865 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-20 06:23:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2306, 2579, 2584, 2568, 2653]
  line "STC (8.0+0.08s)" [2306, 2579, 2584, 2568, 2653]
  line "LTC (60.0+0.60s)" [2755, 2938, 2909, 2940, 3069]
  line "VLTC (2m24s+1.12s)" [2865, 2973, 2905, 3042, 3120]
  line "VLTC (2m24s+1.12s)" [2865, 2973, 2905, 3042, 3120]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3120 | 38 | 202 | 48% | 3137 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3069 | 43 | 150 | 51% | 3065 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2653 | 50 | 128 | 50% | 2654 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3042 | 34 | 242 | 51% | 3036 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2940 | 35 | 238 | 50% | 2935 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2568 | 34 | 274 | 50% | 2568 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2905 | 31 | 292 | 49% | 2916 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2909 | 34 | 248 | 49% | 2913 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2584 | 35 | 256 | 48% | 2597 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2973 | 31 | 288 | 49% | 2978 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 32 | 280 | 51% | 2930 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2579 | 30 | 336 | 48% | 2595 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2865 | 32 | 302 | 49% | 2874 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2755 | 34 | 268 | 48% | 2773 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2306 | 35 | 272 | 46% | 2342 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |