# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260704 | 2026-07-04 | 3008<sub>(+609) | 3216<sub>(+552) | 3248<sub>(+534) |  |
| 20260628 | 2026-06-28 | 2399<sub>(-1) | 2664<sub>(+22) | 2714<sub>(-22) |  |
| 20260616 | 2026-06-16 | 2400<sub>(+new) | 2642<sub>(+new) | 2736<sub>(+new) |  |
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

Generated: 2026-07-15 06:22:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2400, 2399, 3008]
  line "STC (8.0+0.08s)" [2400, 2399, 3008]
  line "LTC (60.0+0.60s)" [2642, 2664, 3216]
  line "VLTC (2m24s+1.12s)" [2736, 2714, 3248]
  line "VLTC (2m24s+1.12s)" [2736, 2714, 3248]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2400, 2399, 3008]
  line "STC (8.0+0.08s)" [2400, 2399, 3008]
  line "LTC (60.0+0.60s)" [2642, 2664, 3216]
  line "VLTC (2m24s+1.12s)" [2736, 2714, 3248]
  line "VLTC (2m24s+1.12s)" [2736, 2714, 3248]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3248 | 36 | 232 | 56% | 3197 | 49% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3216 | 43 | 160 | 57% | 3150 | 51% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3008 | 40 | 212 | 54% | 2959 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2714 | 46 | 148 | 51% | 2703 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2664 | 53 | 116 | 49% | 2673 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2399 | 53 | 116 | 50% | 2398 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2736 | 47 | 144 | 51% | 2726 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2642 | 47 | 148 | 46% | 2676 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2400 | 41 | 196 | 44% | 2460 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |