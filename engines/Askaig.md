# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260704 | 2026-07-04 | 3011<sub>(+616) | 3190<sub>(+529) | 3244<sub>(+533) |  |
| 20260628 | 2026-06-28 | 2395<sub>(-3) | 2661<sub>(+22) | 2711<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2398<sub>(+new) | 2639<sub>(+new) | 2734<sub>(+new) |  |
| 20260615 | 2026-06-15 |  |  |  |  |
| 20260614 | 2026-06-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260704" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-30 06:22:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2398, 2395, 3011]
  line "STC (8.0+0.08s)" [2398, 2395, 3011]
  line "LTC (60.0+0.60s)" [2639, 2661, 3190]
  line "VLTC (2m24s+1.12s)" [2734, 2711, 3244]
  line "VLTC (2m24s+1.12s)" [2734, 2711, 3244]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 33 | 276 | 54% | 3204 | 49% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 31 | 292 | 52% | 3166 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3011 | 34 | 284 | 53% | 2977 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2711 | 46 | 148 | 51% | 2700 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2661 | 53 | 116 | 49% | 2670 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2395 | 53 | 116 | 50% | 2394 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2734 | 47 | 144 | 51% | 2723 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2639 | 47 | 148 | 46% | 2673 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2398 | 41 | 196 | 44% | 2457 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |