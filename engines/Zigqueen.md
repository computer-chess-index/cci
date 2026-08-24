# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-08-19 | 3113<sub>(+117) | 3347<sub>(+34) | 3390<sub>(+18) |  |
| 5.8.3 | 2026-07-25 | 2996<sub>(+new) | 3313<sub>(+new) | 3372<sub>(+new) |  |
| 5.8.2 | 2026-07-24 |  |  |  |  |
| 5.8.1 | 2026-07-23 |  |  |  |  |
| 5.8.0 | 2026-07-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zigqueen+<version>&body=###%20Engine%20name%0AZigqueen%0A%0A###%20Version%0A6.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:33:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3400
  line "STC (8.0+0.08s)" [2996, 3113]
  line "STC (8.0+0.08s)" [2996, 3113]
  line "LTC (60.0+0.60s)" [3313, 3347]
  line "VLTC (2m24s+1.12s)" [3372, 3390]
  line "VLTC (2m24s+1.12s)" [3372, 3390]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3390 | 46 | 116 | 50% | 3386 | 72% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3347 | 42 | 140 | 50% | 3348 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3113 | 46 | 124 | 50% | 3113 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 33 | 228 | 48% | 3386 | 76% |
| 5.8.3 | LTC <sub>(60.0+0.60s)</sub> | 3313 | 40 | 160 | 51% | 3305 | 67% |
| 5.8.3 | STC <sub>(8.0+0.08s)</sub> | 2996 | 38 | 188 | 54% | 2965 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |