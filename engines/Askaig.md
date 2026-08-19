# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 2969<sub>(-42) | 3254<sub>(+52) | 3289<sub>(+40) |  |
| 20260704 | 2026-07-04 | 3011<sub>(+612) | 3202<sub>(+537) | 3249<sub>(+534) |  |
| 20260628 | 2026-06-28 | 2399<sub>(-1) | 2665<sub>(+23) | 2715<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2400<sub>(+new) | 2642<sub>(+new) | 2738<sub>(+new) |  |
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

Generated: 2026-08-19 06:22:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2400, 2399, 3011, 2969]
  line "STC (8.0+0.08s)" [2400, 2399, 3011, 2969]
  line "LTC (60.0+0.60s)" [2642, 2665, 3202, 3254]
  line "VLTC (2m24s+1.12s)" [2738, 2715, 3249, 3289]
  line "VLTC (2m24s+1.12s)" [2738, 2715, 3249, 3289]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3289 | 35 | 226 | 51% | 3278 | 53% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3254 | 34 | 248 | 49% | 3263 | 46% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 2969 | 38 | 220 | 52% | 2951 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 31 | 312 | 54% | 3213 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3202 | 30 | 320 | 53% | 3174 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3011 | 32 | 312 | 53% | 2981 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2715 | 46 | 148 | 51% | 2704 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2665 | 53 | 116 | 49% | 2674 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2399 | 53 | 116 | 50% | 2398 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2738 | 47 | 144 | 51% | 2726 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2642 | 47 | 148 | 46% | 2676 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2400 | 41 | 196 | 44% | 2460 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |