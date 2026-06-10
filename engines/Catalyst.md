# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-04-23 | 2650<sub>(+85) | 3066<sub>(+130) | 3116<sub>(+78) |  |
| 2.2.0 | 2026-04-03 | 2565<sub>(-16) | 2936<sub>(+31) | 3038<sub>(+137) |  |
| 2.1.0 | 2026-04-02 | 2581<sub>(+5) | 2905<sub>(-29) | 2901<sub>(-68) |  |
| 2.0.0 | 2026-03-29 | 2576<sub>(+273) | 2934<sub>(+181) | 2969<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2303 | 2753 | 2861 |  |
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

Generated: 2026-06-10 06:23:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2303, 2576, 2581, 2565, 2650]
  line "STC (8.0+0.08s)" [2303, 2576, 2581, 2565, 2650]
  line "LTC (60.0+0.60s)" [2753, 2934, 2905, 2936, 3066]
  line "VLTC (2m24s+1.12s)" [2861, 2969, 2901, 3038, 3116]
  line "VLTC (2m24s+1.12s)" [2861, 2969, 2901, 3038, 3116]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3116 | 38 | 202 | 48% | 3135 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3066 | 43 | 150 | 51% | 3062 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2650 | 50 | 128 | 50% | 2651 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3038 | 34 | 242 | 51% | 3033 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2936 | 35 | 238 | 50% | 2931 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2565 | 34 | 274 | 50% | 2564 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2901 | 31 | 292 | 49% | 2912 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2905 | 34 | 248 | 49% | 2909 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2581 | 35 | 256 | 48% | 2595 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2969 | 31 | 288 | 49% | 2975 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 32 | 280 | 51% | 2925 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2576 | 30 | 336 | 48% | 2592 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 32 | 302 | 49% | 2870 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2753 | 34 | 268 | 48% | 2770 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2303 | 35 | 272 | 46% | 2340 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |