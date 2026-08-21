# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 2965<sub>(-47) | 3254<sub>(+50) | 3289<sub>(+38) |  |
| 20260704 | 2026-07-04 | 3012<sub>(+613) | 3204<sub>(+538) | 3251<sub>(+536) |  |
| 20260628 | 2026-06-28 | 2399<sub>(-3) | 2666<sub>(+23) | 2715<sub>(-24) |  |
| 20260616 | 2026-06-16 | 2402<sub>(+new) | 2643<sub>(+new) | 2739<sub>(+new) |  |
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

Generated: 2026-08-21 06:22:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2402, 2399, 3012, 2965]
  line "STC (8.0+0.08s)" [2402, 2399, 3012, 2965]
  line "LTC (60.0+0.60s)" [2643, 2666, 3204, 3254]
  line "VLTC (2m24s+1.12s)" [2739, 2715, 3251, 3289]
  line "VLTC (2m24s+1.12s)" [2739, 2715, 3251, 3289]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3289 | 34 | 238 | 51% | 3281 | 52% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3254 | 33 | 264 | 49% | 3264 | 48% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 2965 | 36 | 244 | 51% | 2955 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3251 | 31 | 312 | 54% | 3214 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3204 | 30 | 320 | 53% | 3175 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3012 | 32 | 312 | 53% | 2982 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2715 | 46 | 148 | 51% | 2705 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2666 | 53 | 116 | 49% | 2676 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2399 | 53 | 116 | 50% | 2398 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2739 | 47 | 144 | 51% | 2727 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2643 | 47 | 148 | 46% | 2677 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2402 | 41 | 196 | 44% | 2461 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |