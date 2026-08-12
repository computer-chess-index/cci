# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 2951<sub>(-54) | 3268<sub>(+71) | 3258<sub>(+15) |  |
| 20260704 | 2026-07-04 | 3005<sub>(+613) | 3197<sub>(+537) | 3243<sub>(+535) |  |
| 20260628 | 2026-06-28 | 2392<sub>(-2) | 2660<sub>(+22) | 2708<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2394<sub>(+new) | 2638<sub>(+new) | 2731<sub>(+new) |  |
| 20260615 | 2026-06-15 |  |  |  |  |
| 20260614 | 2026-06-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260811" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 07:43:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2394, 2392, 3005, 2951]
  line "STC (8.0+0.08s)" [2394, 2392, 3005, 2951]
  line "LTC (60.0+0.60s)" [2638, 2660, 3197, 3268]
  line "VLTC (2m24s+1.12s)" [2731, 2708, 3243, 3258]
  line "VLTC (2m24s+1.12s)" [2731, 2708, 3243, 3258]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 62 | 72 | 50% | 3256 | 50% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3268 | 57 | 92 | 51% | 3264 | 45% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 2951 | 53 | 112 | 52% | 2931 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 31 | 312 | 54% | 3206 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3197 | 30 | 320 | 53% | 3167 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3005 | 32 | 312 | 53% | 2975 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 46 | 148 | 51% | 2699 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2660 | 53 | 116 | 49% | 2669 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2392 | 53 | 116 | 50% | 2391 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2731 | 47 | 144 | 51% | 2720 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2638 | 47 | 148 | 46% | 2670 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2394 | 41 | 196 | 44% | 2453 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |