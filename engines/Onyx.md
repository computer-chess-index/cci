# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2882<sub>(+266) | 3144<sub>(+225) | 3214<sub>(+206) |  |
| 1.6 | 2026-06-13 | 2616 | 2919 | 3008 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onyx+<version>&body=###%20Engine%20name%0AOnyx%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-20 06:27:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2616, 2882]
  line "STC (8.0+0.08s)" [2616, 2882]
  line "LTC (60.0+0.60s)" [2919, 3144]
  line "VLTC (2m24s+1.12s)" [3008, 3214]
  line "VLTC (2m24s+1.12s)" [3008, 3214]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3214 | 39 | 176 | 50% | 3214 | 59% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3144 | 36 | 216 | 50% | 3147 | 53% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2882 | 40 | 190 | 52% | 2865 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3008 | 32 | 296 | 48% | 3023 | 40% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2919 | 34 | 264 | 46% | 2950 | 41% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2616 | 34 | 276 | 50% | 2622 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |