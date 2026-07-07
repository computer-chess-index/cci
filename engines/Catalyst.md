# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2651<sub>(+83) | 3070<sub>(+128) | 3121<sub>(+78) |  |
| 2.2.0 | 2026-04-03 | 2568<sub>(-16) | 2942<sub>(+31) | 3043<sub>(+136) |  |
| 2.1.0 | 2026-04-02 | 2584<sub>(+5) | 2911<sub>(-28) | 2907<sub>(-66) |  |
| 2.0.0 | 2026-03-29 | 2579<sub>(+276) | 2939<sub>(+182) | 2973<sub>(+107) |  |
| 1.0.0 | 2026-03-26 | 2303 | 2757 | 2866 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-07 06:23:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2303, 2579, 2584, 2568, 2651]
  line "STC (8.0+0.08s)" [2303, 2579, 2584, 2568, 2651]
  line "LTC (60.0+0.60s)" [2757, 2939, 2911, 2942, 3070]
  line "VLTC (2m24s+1.12s)" [2866, 2973, 2907, 3043, 3121]
  line "VLTC (2m24s+1.12s)" [2866, 2973, 2907, 3043, 3121]
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
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2303, 2579, 2584, 2568, 2651]
  line "STC (8.0+0.08s)" [2303, 2579, 2584, 2568, 2651]
  line "LTC (60.0+0.60s)" [2757, 2939, 2911, 2942, 3070]
  line "VLTC (2m24s+1.12s)" [2866, 2973, 2907, 3043, 3121]
  line "VLTC (2m24s+1.12s)" [2866, 2973, 2907, 3043, 3121]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3121 | 38 | 202 | 48% | 3139 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3070 | 43 | 150 | 51% | 3066 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2651 | 50 | 128 | 50% | 2653 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3043 | 34 | 242 | 51% | 3038 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 35 | 238 | 50% | 2936 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2568 | 34 | 274 | 50% | 2566 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2907 | 31 | 292 | 49% | 2917 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2911 | 34 | 248 | 49% | 2915 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2584 | 35 | 256 | 48% | 2597 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2973 | 31 | 288 | 49% | 2979 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2939 | 32 | 280 | 51% | 2931 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2579 | 30 | 336 | 48% | 2595 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2866 | 32 | 302 | 49% | 2876 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2757 | 34 | 268 | 48% | 2774 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2303 | 35 | 272 | 46% | 2340 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |