# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1989<sub>(+630) | 2253<sub>(+386) | 2402<sub>(+233) |  |
| R4 | 2026-04-22 | 1359<sub>(+new) | 1867<sub>(+new) | 2169<sub>(+new) |  |
| R3 | 2026-04-22 |  |  |  |  |
| R2 | 2025-09-25 |  |  |  |  |
| R1 | 2025-09-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viking+<version>&body=###%20Engine%20name%0AViking%0A%0A###%20Version%0AR5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:29:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2500
  line "STC (8.0+0.08s)" [1359, 1989]
  line "STC (8.0+0.08s)" [1359, 1989]
  line "LTC (60.0+0.60s)" [1867, 2253]
  line "VLTC (2m24s+1.12s)" [2169, 2402]
  line "VLTC (2m24s+1.12s)" [2169, 2402]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2402 | 31 | 338 | 49% | 2406 | 36% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2253 | 32 | 332 | 53% | 2219 | 30% |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1989 | 31 | 386 | 53% | 1956 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | 2169 | 31 | 372 | 41% | 2282 | 28% |
| R4 | LTC <sub>(60.0+0.60s)</sub> | 1867 | 36 | 298 | 46% | 1937 | 23% |
| R4 | STC <sub>(8.0+0.08s)</sub> | 1359 | 38 | 288 | 47% | 1426 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |